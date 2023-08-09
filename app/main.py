from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pathlib import Path

import manageFiles

BASE_PATH = Path(__file__).resolve().parent
TEMPLATES = Jinja2Templates(directory=str(BASE_PATH / "templates"))

app = FastAPI()
app.mount(str(BASE_PATH / "static"), StaticFiles(directory="static"), name="static")

@app.get("/", response_class=HTMLResponse)
async def main(request: Request) -> HTMLResponse:
    files_list = await manageFiles.read_all()
    return TEMPLATES.TemplateResponse("index.html", {"request": request, "input": files_list})

@app.get("/BP/", response_class=JSONResponse)
async def read_all() -> JSONResponse:
    result = await manageFiles.read_all()
    return result

@app.get("/BP/{name}", response_class=JSONResponse)   
async def read_one(name: str) -> JSONResponse:
    result = await manageFiles.read_one(name)
    return result
