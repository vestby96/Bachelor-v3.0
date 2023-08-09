import os
import asyncio
import xmltodict
import json


dir_path = '/app/BP-files'

async def analyze(xml_string: str = None, path: str = None) -> str:
    """
        Takes one of two arguments: xml_string is a stringified xml file, path is the absolute path to the files location\n
        Returns a json-object as a string
    """

    if xml_string:
        data_dict = xmltodict.parse(xml_string)

        json_str = json.dumps(data_dict)

        return json_str
    
    if path:
        f = open(path, 'r')
        xml_string = f.read()

        data_dict = xmltodict.parse(xml_string)

        json_str = json.dumps(data_dict)

        return json_str
    
    return 'No input provided'


async def read_one(name: str) -> str:

    file_path = os.path.join(dir_path, name)

    obj = await analyze(path=file_path)

    json_obj = json.loads(obj)

    return json_obj

async def read_all() -> list[str]:

    return os.listdir(dir_path)
