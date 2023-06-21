from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from pathlib import Path

BASE_PATH = Path(__file__).resolve().parent
TEMPLATES = Jinja2Templates(directory=str(BASE_PATH / "templates"))

app = FastAPI()
app.mount(str(BASE_PATH / "static"), StaticFiles(directory="static"), name="static")

@app.get("/", response_class=HTMLResponse)
async def main(request: Request):
    return TEMPLATES.TemplateResponse("index.html", {"request": request})

@app.get('/test')
def test():
    return {'message': 'Hello world'}
