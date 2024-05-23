def calcular(num):
    created = []
    for i in range (1,8):
        for j in range(1,8):
            for k in range(1,8):
                for l in range(1,8):
                    if j*k*l*i == num and sorted([j,i,k,l])not in created:
                        print(sorted([j,i,k,l]))
            
                        created.append(sorted([j,i,k,l]))
                       


calcular(168
         
)

