from fastapi import FastAPI

app = FastAPI(

    title="LafiyaTrack API",

    version="0.1.0",

    description="Offline-first Community Nutrition Platform"

)

@app.get("/")
def root():

    return {

        "name":"LafiyaTrack",

        "version":"0.1.0",

        "status":"running"

    }
