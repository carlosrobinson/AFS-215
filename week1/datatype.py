class DataTypes:
    def __init__(self):
        self.datatype=[]


    def addItem(self, data):
        self.datatype.append(data)
        return self.datatype



    def addTuples(self, tup1, tup2, tup3, tup4):
        myTuple = (tup1, tup2, tup3, tup4)
        self.datatype.append(myTuple)



    def transformList(self):
        newTuple = tuple(self.datatype)
        return newTuple




data = DataTypes()
data.addItem(63)
data.addItem('b')
data.addItem({
    'fname': 'Carlos',
    'lname': 'Robinson',
    'email': 'carlos.robinson@example.com'
})
data.addTuples(6, 7, 8, 3.5)
print(f'List:_______________________________\n{data.datatype} \n')


data.transformList()
print(f'Tuple:______________________________\n{data.transformList()}')



