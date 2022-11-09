class Graph {
	constructor() {
		this.list = {};
	}

	addVertex(vertex) {
		this.list[vertex] = this.list[vertex] || [];
	}

	addEdges(vert1, vert2) {
		if (this.list[vert1]) this.list[vert1].push(vert2);
		if (this.list[vert2]) this.list[vert2].push(vert1);
	}
}
