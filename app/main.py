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
    files_list = await manageFiles.read_all_long()
    return TEMPLATES.TemplateResponse("index.html", {"request": request, "fullList": files_list})

@app.get("/test", response_class=HTMLResponse)
async def test(request: Request) -> HTMLResponse:
    files_list = await manageFiles.read_all_long()
    return TEMPLATES.TemplateResponse("test.html", {"request": request, "fullList": files_list})

@app.get("/BP-short/", response_class=JSONResponse)
async def read_all_short() -> JSONResponse:
    result = await manageFiles.read_all_short()
    return result

@app.get("/BP-long/", response_class=JSONResponse)
async def read_all_long() -> JSONResponse:
    result_list = await manageFiles.read_all_long()

    return result_list

@app.get("/BP-long/{name}", response_class=JSONResponse)   
async def read_one(name: str) -> JSONResponse:
    result = await manageFiles.read_one(name)
    return result

