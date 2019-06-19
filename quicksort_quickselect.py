import random

def partition(A, start, end):
    edge = pointer = start
    pivot = random.randint(start, end)
    A[end], A[pivot] = A[pivot], A[end]

    while pointer < end:
        if A[end] > A[pointer]:
            A[edge], A[pointer] = A[pointer], A[edge]
            edge += 1
        pointer +=1
    
    A[end], A[edge] = A[edge], A[end]
    
    return edge
    
def quicksort(A, start, end):
    if start > end:
        return A
    edge = partition(A, start, end)
    quicksort(A, start, edge - 1)
    quicksort(A, edge + 1, end)
    
    return A
    
def quickselect(A, start, end, k):
    if start > end:
        return -1
    edge = partition(A, start, end)
    if k == edge:
        return A[k]
    elif k > edge:
        return quickselect(A, edge + 1, end, k)
    elif k < edge:
        return quickselect(A, start, edge - 1, k)
