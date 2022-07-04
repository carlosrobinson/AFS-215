import numbers


class TodoList:

    def __init__(self):
        self.item = []
        


    def add_todo_item(self, data):
            if data not in  self.item:
                self.item.append(data)
                return self.item
            elif data in self.item:
                return f"{data} already exists"

    def add_multiple_items(self, data =  {"fName": str, "lName": str,  "age": int, "student": bool}):
        if data not in  self.item:
            self.item.append(data)
            return self.item
        elif data in self.item:
            return f"{data} already exists"


    def call_todo_list(self):
        return self.item



    def remove_first_item(self, data):
        self.item.pop(data)
        return self.item


    def remove_last_item(self):
        self.item.pop()
        return self.item



    def remove_specific_item(self, data):
        if data in self.item:
            self.item.remove(data)
            return self.item
        elif data not in self.item:
            return f"{data} does not exists"
