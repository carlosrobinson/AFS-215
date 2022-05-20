def pythonKata():

    for num in range(1, 100):
        if num % 3==0 and num % 5==0:
            print('PepsiCoke')
        elif num % 3 ==0 or num % 6 == 0:
            print('Pepsi')
        elif num % 5==0 or  num % 10==0:
            print('Coke')
        else:
            print(num)
pythonKata()
