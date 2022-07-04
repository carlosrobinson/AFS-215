import pytest

from lib.Todo import TodoList




@pytest.fixture
def todo_list():
    todo_list = TodoList()
    todo_list.add_todo_item("todo") 
    todo_list.add_todo_item(100)
    todo_list.add_multiple_items({'fName': 'Carlos', 'lName': 'Robinson', 'age': 47,"student": True})
    return todo_list
        
def test_call_todo_list(todo_list):
        todo_list = TodoList()
        assert todo_list


def test_add_todo_item(todo_list):
    assert todo_list.add_todo_item("todo") == todo_list.call_todo_list()


def test_add_multiple_items(todo_list):
    assert todo_list.add_multiple_items({'fName': 'John', 'lName': 'Doe', 'age': 21,"student": False}) == todo_list.call_todo_list()



def test_remove_first_item(todo_list):
    assert todo_list.remove_first_item(0) == todo_list.call_todo_list()


def test_remove_last_item(todo_list):
    assert todo_list.remove_last_item() == todo_list.call_todo_list()


def test_remove_specific_Item(todo_list):
    assert todo_list.remove_specific_item(100) == todo_list.call_todo_list()


