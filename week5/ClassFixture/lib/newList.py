class NewList():

# Can call NewList

# Can add string to list

# Can evaluate all items in list`
    def __init__(self):
        self.list = []

    def add_String(self, item):
        self.list.append(item)
        return self.list

    def get_item(self):
        return self.list

    def search_list_for_item(self, item):
            for i in self.list:
                if item == i:
                    return item

    def search_for_all(self):
        return self.list