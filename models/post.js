module.exports = {
    posts:[{id: 1, title: 'teste do mural', description:'teste do mural'}],
    
    getAll(){
        return this.posts;
    },

    newPost(title, description){
        let id = this.generateID();
       this.posts.push({id, title, description});
    },

    deletePost(id){
        let indice = this.posts.findIndex(elemento => elemento.id === id);

        if(indice > -1){
            this.posts.splice(indice, 1);
            return 'Post excluido com sucesso!';
        }
        return 'Post não foi encontrado';
    },

     generateID (){
        return Math.random().toString(36).substring(2,9);
    }
};