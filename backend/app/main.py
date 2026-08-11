from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .config import settings
from .routers import diagnostics

app = FastAPI(title="RoadToIvies API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins_list,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

app.include_router(diagnostics.router)


@app.get("/health")
async def health():
    return {"status": "ok"}
