// Solution / Решение

class Node {
    constructor(id) {
        this.id = id;
        this.up = this.down = this.left = this.right = null;
    }
}

function LCA(node1, node2) {
    switch (true) {
        case !node1.up: // корневой узел node1 (LCA)
            return node1.id;
        case !node2.up: // корневой узел node2 (LCA)
            return node2.id;
        case node1.id === 1 || node2.id === 1: // корневой узел node1 или node2 (LCA)
            return 1;
        case node1.id === node2.id: // равенство узлов верхнего уровня (node1.id -> LCA)
            return node1.id;
        case node1.up.id === node2.id: // равенство узлов node1 вложенность с node2.id (node2.id -> LCA)
            return node2.id;
        case node2.up.id === node1.id: // равенство узлов node2 (вложенность) с node1.id (node1.id -> LCA)
            return node1.id;
        case node1.up.id === node2.up.id: // равенство узлов node1 (вложенность) с node2 (вложенность) (node1.up.id -> LCA)
            return node1.up.id;
        default: // рекурсивный запуск функции со следующим уровнем вложенности
            return LCA(node1.up, node2.up);
    }
}

// Stack

function LCA(node1, node2) {
    // Для хранения узлов и их предков
    const stack1 = [];
    const stack2 = [];
    while (node1) stack1.push(node1) && (node1 = node1.up); // Заполняем stack1 узлами и их предками от node1 к корневому узлу
    while (node2) stack2.push(node2) && (node2 = node2.up); // Заполняем stack2 узлами и их предками от node2 к корневому узлу
    let result = null; // Для хранения LCA
    // Пока оба стека не пусты и вершины стеков равны 
    while (stack1.length && stack2.length && stack1[stack1.length - 1] === stack2[stack2.length - 1]) result = stack1.pop() && stack2.pop(); // 
    return result ? result.id : null; // Если LCA найден (result не равно null), возвращаем его id, иначе возвращаем null
}

// Tests

const tree = buildTree({
    id: 1,
    children: [
        {
            id: 2,
            children: [
                {
                    id: 4,
                    children: []
                }
            ]
        },
        {
            id: 3,
            children: []
        }
    ]
});

/*

Preface
Disclaimer
The purpose of this kata is not so much about finding the optimal strategy for finding the LCA, 
but rather about warriors showcasing different strategies.

Similar kata's
Find whether there is a route between two nodes in a graph

Task
The Lowest Common Ancestor (LCA) of two nodes in a Tree is the lowest (i.e. deepest) node that has both specified nodes as descendants, 
where we define each node to be a descendant of itself.

"Given two nodes that are both part of the same tree, 
find the LCA and return its id. Each node will have a unique id."

Input
nodeA: the first node
nodeB: the second node

Output
Return the id of the LCA of both nodes.

Data Structures
Tree
A tree represents a hierarchical tree structure with a set of connected nodes. 
In this kata, there is no specific data structure for a tree. 
The root node (topmost node) will act as the tree.

Node
Each node in the tree can be connected to zero, one or more children, 
but must be connected to exactly one parent, except for the root node, which has no parent. 
In this kata, a node is connected to its parent using property up, 
its siblings using properties left and right, and its first child using property down. 
To get all children, call down and keep calling right until reaching a null pointer. 
Each node will also have a unique id.

Examples
Let's use a custom view of our example tree in JSON format, 
where each node is an object containing its id and an array containing all of its children. 
We'll end up with the recursive data structure below. All examples concern this tree.


{
  id: 1,
  children: [
    {
      id: 2,
      children: [
        {
          id: 4,
          children: []
        }
      ]
    },
    {
      id: 3,
      children: []
    }
  ]
}

1. A node is the LCA of itself
LCA(node4, node4) = 4
LCA(node3, node3) = 3
LCA(node2, node2) = 2
LCA(node1, node1) = 1

2. Nodes in the same branch have one of both nodes as LCA
LCA(node1, node2) = 1
LCA(node1, node3) = 1
LCA(node1, node4) = 1
LCA(node2, node4) = 2

3. Nodes in different branches have the pivot node where both branches join as LCA
LCA(node3, node4) = 1

*/

/*

Предисловие
Отказ от ответственности
Целью данного ката является не столько поиск оптимальной стратегии нахождения ЛКА, 
а скорее в том, чтобы продемонстрировать воинам различные стратегии.

Похожие ката
Найти, существует ли маршрут между двумя вершинами в графе

Задача
Наименьший общий предок (НОМ) двух вершин в дереве - это самая нижняя (т.е. глубокая) вершина, которая имеет в качестве потомков обе указанные вершины, 
при этом каждый узел определяется как потомок самого себя.

"Даны два узла, которые являются частью одного дерева, 
найти LCA и вернуть его идентификатор. Каждый узел будет иметь уникальный идентификатор".

Вход
nodeA: первый узел
nodeB: второй узел

Выход
Возвращает идентификатор LCA обоих узлов.

Структуры данных
Дерево
Дерево представляет собой иерархическую древовидную структуру с набором связанных узлов. 
В данном ката нет определенной структуры данных для дерева. 
В качестве дерева будет выступать корневой узел (самый верхний узел).

Узел
Каждый узел дерева может быть связан с нулем, одним или несколькими дочерними узлами, 
но должен быть связан ровно с одним родителем, за исключением корневого узла, у которого нет родителя. 
В этом ката узел соединяется со своим родителем с помощью свойства up, 
со своими братьями и сестрами - с помощью свойств left и right, а со своим первым ребенком - с помощью свойства down. 
Чтобы получить все дочерние узлы, вызовите down и продолжайте вызывать right, пока не достигнете нулевого указателя. 
Каждый узел также будет иметь уникальный идентификатор.

Примеры
Давайте воспользуемся пользовательским представлением нашего примера дерева в формате JSON, 
где каждый узел является объектом, содержащим его id и массив, содержащий все его дочерние элементы. 
В итоге мы получим рекурсивную структуру данных, представленную ниже. Все примеры относятся к этому дереву.


{
  id: 1,
  children: [
    {
      id: 2,
      children: [
        {
          id: 4,
          children: []
        }
      ]
    },
    {
      id: 3,
      children: []
    }
  ]
}

1. Узел является LCA самого себя
LCA(node4, node4) = 4
LCA(node3, node3) = 3
LCA(node2, node2) = 2
LCA(node1, node1) = 1

2. Узлы в одной ветви имеют один из обоих узлов в качестве LCA
LCA(node1, node2) = 1
LCA(node1, node3) = 1
LCA(node1, node4) = 1
LCA(node2, node4) = 2

3. Узлы в разных ветвях имеют стержневой узел, в котором обе ветви соединяются как LCA
LCA(node3, node4) = 1

*/