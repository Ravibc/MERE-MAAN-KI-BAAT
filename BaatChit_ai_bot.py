from flask import Flask, request, jsonify
import google.generativeai as genai

# Initialize the Flask app
app = Flask(name)

# Setup Gemini API
def setup_api():
    genai.configure(api_key="AIzaSyAACeVxJfXvV4MIFwcfDxJx6DaL9vKtyO0")

# Generate text using Gemini API
def generate_text(prompt):
    try:
        response = genai.generate_text(model="models/text-bison-001", prompt=prompt)
        return response["candidates"][0]["output"]
    except Exception as e:
        return f"[ERROR] An error occurred: {str(e)}"

# Define a route for the chatbot
@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    
    # Validate input
    if "prompt" not in data:
        return jsonify({"error": "Prompt is required"}), 400
    
    prompt = data["prompt"]
    response = generate_text(prompt)
    
    return jsonify({"response": response})

# Main entry point
if name == "main":
    setup_api()
    app.run(debug=True)
