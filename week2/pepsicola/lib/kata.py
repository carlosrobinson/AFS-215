

def pythonKata(num= 0) -> int:
    #     if num % 3 ==0:
    #         print('Pepsi')
    #     elif num % 5==0:
    #         print('Coke')
    #     else:
    #         print(num)


        if num % 3==0 and num % 5==0:
            return 'PepsiCoke'
        elif num % 3 ==0 or num % 6 == 0:
            return 'Pepsi'
        elif num % 5==0 or  num % 10==0:
            return 'Coke'
        else:
            return str(num)
pythonKata()
