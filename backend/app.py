from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route("/update-section", methods=["POST"])
def update_section():
    try:
        data = request.get_json()
        component = data.get("component")
        field = data.get("field")
        value = data.get("value")

        # Console logging
        print("\n" + "-"*60)
        print("🚀 NEW EDIT RECEIVED FROM FRONTEND")
        print(f"Component: {component}")
        print(f"Field: {field}")
        print(f"Value: {value}")
        print("-"*60 + "\n")

        return jsonify({"message": "Data received successfully"}), 200
    except Exception as e:
        print("❌ Error receiving data:", str(e))
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))  # Render gives PORT dynamically
    print(f"⚡ Flask backend running on http://0.0.0.0:{port}")
    app.run(host="0.0.0.0", port=port, debug=True)
