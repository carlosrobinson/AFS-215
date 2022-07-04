import pytest

from lib.Todo import TodoList

["todo", 100, {'fName': 'Carlos', 'lName': 'Robinson', 'age': 47,"student": True}, "End"]
["todo", 100, {'fName': 'Carlos', 'lName': 'Robinson', 'age': 47,"student": True}, {'fName': 'John', 'lName': 'Doe', 'age': 21,"student": False}]
[100, {'fName': 'Carlos', 'lName': 'Robinson', 'age': 47,"student": True}]


@pytest.fixture
def test_Call_Todo():
    todo_list = TodoList()
    todo_list.add_todo_item("todo") 
    todo_list.add_todo_item(100)
    todo_list.add_todo_item({'fName': 'Carlos', 'lName': 'Robinson', 'age': 47,"student": True})
    return todo_list
        



def test_add_todo(todo_list):
    assert todo_list.add_todo_item("End") == ["todo", 100, {'fName': 'Carlos', 'lName': 'Robinson', 'age': 47,"student": True}, "End"]


# def test_add_multiple_items(todo_list):
#     assert todo_list.add_multiple_items({'fName': 'Carlos', 'lName': 'Robinson', 'age': 47,"student": True}) == ["todo", 100, {'fName': 'Carlos', 'lName': 'Robinson', 'age': 47,"student": True}]



# def test_remove_first_Item(todo_list):
#     assert todo_list.remove_first_item(0) == [100, {'fname': 'Carlos', 'lname': 'Robinson', 'age': 47,"student": True}]


# def test_remove_last_Item(todo_list):
#     assert todo_list.remove_last_item() == ["todo", {'fname': 'Carlos', 'lname': 'Robinson', 'age': 47,"student": True}]


# def test_remove_specific_Item(todo_list):
#     assert todo_list.remove_specific_item(100) == ["todo", {'fname': 'Carlos', 'lname': 'Robinson', 'age': 47,"student": True}]


