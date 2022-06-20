import pytest

from lib.newList import NewList


@pytest.fixture()
def list():
        list = NewList()
        list.add_String("Toyota")
        list.add_String("Honda")
        list.search_list_for_item("Honda")
        return list

# Can place a string into a list
def test_add_List(list):
        assert list.add_String("Chevy") == list.get_item()


# Can search the list for a single instance of a string
def test_search_for_item(list):
    assert list.search_list_for_item("Toyota") in list.get_item()

# Can evaluate all items in list
def test_searh_for_all(list):
    assert list.search_for_all() == list.get_item()

