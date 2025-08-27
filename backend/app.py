from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/update-section", methods=["POST"])
def update_section():
    try:
        data = request.get_json()  # get JSON data from frontend
        component = data.get("component")
        field = data.get("field")
        value = data.get("value")

        # Log the received data
        print("-" * 50)
        print("NEW EDIT RECEIVED FROM FRONTEND")
        print(f"Component: {component}")
        print(f"Field: {field}")
        print(f"Value: {value}")
        print("-" * 50)

        # Send a success response
        return jsonify({"message": "Data received successfully"}), 200

    except Exception as e:
        print("Error receiving data:", str(e))
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5000)
