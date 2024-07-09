# backend/app/main.py

from fastapi import FastAPI
from .routers import form

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello World"}

app.include_router(form.router)
