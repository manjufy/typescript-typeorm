"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Post_1 = require("./entity/Post");
const Category_1 = require("./entity/Category");
typeorm_1.createConnection().then(async (connection) => {
    const category1 = new Category_1.Category();
    category1.name = "TypeScript";
    await connection.manager.save(category1);
    const category2 = new Category_1.Category();
    category2.name = "Programming";
    await connection.manager.save(category2);
    const post = new Post_1.Post();
    post.title = "Control flow based type analysis";
    post.text = `TypeScript 2.0 implements a control flow-based type analysis for local variables and parameters.`;
    post.categories = [category1, category2];
    await connection.manager.save(post);
    console.log("Post has been saved: ", post);
}).catch(error => console.log("Error: ", error));
//# sourceMappingURL=index.js.map