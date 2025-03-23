import json
import subprocess
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

UIROBOT_PATH = "C:/Users/STUDIOFIT50/AppData/Local/Programs/UiPath/Studio/UiRobot.exe"
PROCESS_NAME = "BakeryChatbot"

@app.route("/chat", methods=["POST"])
def chat():
    user_input = request.json.get("query", "").strip()
    input_json = json.dumps({"in_UserQuery": user_input})

    print("User Input:", user_input)
    print("User Input JSON:", input_json)
    print("Running UiPath process...")

    result = subprocess.run(
        [UIROBOT_PATH, "execute", "--process", PROCESS_NAME, "--input", input_json],
        capture_output=True, text=True
    )

    print("UIPath Process Output:", result.stdout)
    print("UIPath Process Error:", result.stderr)
    print("UIPath Process return code:", result.returncode)

    # Extract only the value of "out_Response" from JSON output
    try:
        output_json = json.loads(result.stdout)  # Convert string output to dictionary
        response_text = output_json.get("out_Response", "No response from UiPath by backend")  # Extract response
    except json.JSONDecodeError:
        response_text = "Invalid JSON received from UiPath"

    print("Response:", response_text)
    return jsonify({"response": response_text})

if __name__ == "__main__":
    app.run(debug=True)
