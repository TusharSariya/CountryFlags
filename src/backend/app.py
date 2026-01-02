from flask import Flask, jsonify
from flask_cors import CORS
import boto3

app = Flask(__name__)
CORS(app)  # Allows React to talk to Flask

print("Starting Flask backend...")

# Initialize DynamoDB client
dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
table = dynamodb.Table('country-flags')

print("backend initialized")

@app.route('/api/flags')
def get_flags():
    # Fetch data from DynamoDB
    print("Fetching flags from DynamoDB")
    response = table.scan()
    return jsonify(response.get('Items', []))

@app.route('/api/health')
def health_check():
    print("Health check endpoint called")
    return jsonify({"status": "healthy"})

if __name__ == '__main__':
    app.run(host='127.0.0.1',debug=True, port=5000)