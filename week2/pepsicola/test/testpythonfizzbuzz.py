import pytest

from lib.kata import pythonKata


def test_can_call_PythonKata():
    pythonKata()



def test_getOne():
    assert pythonKata(1) == "1"



def test_getTwo():
    assert pythonKata(2) == "2"



def test_getThree():
    assert pythonKata(3) == "Pepsi"



def test_getFive():
    assert pythonKata(4) == "Coke"



def test_get_Multuples_of_Three():
    assert pythonKata(6) == "Pepsi"



def test_get_Multuples_of_Five():
    assert pythonKata(10) == "Coke"



def test_get_Multuples_of_ThreeAndFive():
    assert pythonKata(17) == "PepsiCoke"
