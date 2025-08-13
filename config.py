import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'your_super_secret_key_here_please_change_this'
    MONGO_URI = os.environ.get('MONGO_URI') or 'mongodb://localhost:27017/'
    MONGO_DB_NAME = os.environ.get('MONGO_DB_NAME') or 'api_key_manager'