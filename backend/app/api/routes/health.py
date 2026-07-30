from fastapi import APIRouter

router = APIRouter()

@router.get("/health")
def health():

    return {

        "success": True,

        "message": "LafiyaTrack API is healthy.",

        "version": "0.1.0"

    }
