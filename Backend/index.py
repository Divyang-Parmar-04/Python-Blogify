from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from mongoengine import connect
import os

from routes.postRoute import post_bp
from routes.staticRoute import static_bp

load_dotenv()

app = Flask(__name__)
CORS(app)

# MongoDB connection
MONGO_URI = f"mongodb+srv://{os.getenv('CLUSTER_NAME')}:{os.getenv('CLUSTER_PASSWORD')}@blogify-cluster.1orpljv.mongodb.net/BlogiFyDB?retryWrites=true&w=majority&appName=Blogify-cluster"
connect(host=MONGO_URI)

# Register routes
app.register_blueprint(post_bp)
app.register_blueprint(static_bp)

@app.route("/", methods=["GET"])
def home():
    return {"message": "Flask server running!"}

if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
