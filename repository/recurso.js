const users = [
    {
        id : 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address:   
        {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
                }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: 
        {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: 
            {
            lat: "-43.9509",
            lng: "-34.4618"
            }
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains"
        }
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address:   
        {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: 
            {
                lat: "-68.6102",
                lng: "-47.0653"
            }    
        },
        phone: "1-463-123-4447",
        website: "ramiro.info",
        company: 
        {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications"
        }
        }
    ];
    
    const posts =[
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        userId: 1,
        id: 4,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        userId: 1,
        id: 5,
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
        userId: 1,
        id: 6,
        title: "dolorem eum magni eos aperiam quia",
        body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    }
    ];
    
    const commens =[{
        postId: 1,
        id: 1,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
        postId: 1,
        id: 2,
        name: "quo vero reiciendis velit similique earum",
        email: "Jayne_Kuhic@sydney.com",
        body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
        postId: 1,
        id: 3,
        name: "odio adipisci rerum aut animi",
        email: "Nikita@garfield.biz",
        body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    },
    {
        postId: 1,
        id: 4,
        name: "alias odio sit",
        email: "Lew@alysha.tv",
        body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
    },
    {
        postId: 1,
        id: 5,
        name: "vero eaque aliquid doloribus et culpa",
        email: "Hayden@althea.biz",
        body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
    },
    {
        postId: 2,
        id: 6,
        name: "et fugit eligendi deleniti quidem qui sint nihil autem",
        email: "Presley.Mueller@myrl.com",
        body: "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
    },
    {
        postId: 2,
        id: 7,
        name: "repellat consequatur praesentium vel minus molestias voluptatum",
        email: "Dallas@ole.me",
        body: "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
    },
    {
        postId: 2,
        id: 8,
        name: "et omnis dolorem",
        email: "Mallory_Kunze@marie.org",
        body: "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
    },
    {
        postId: 2,
        id: 9,
        name: "provident id voluptas",
        email: "Meghan_Littel@rene.us",
        body: "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
    },
    {
        postId: 2,
        id: 10,
        name: "eaque et deleniti atque tenetur ut quo ut",
        email: "Carmen_Keeling@caroline.name",
        body: "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
    },
    {
        postId: 3,
        id: 11,
        name: "fugit labore quia mollitia quas deserunt nostrum sunt",
        email: "Veronica_Goodwin@timmothy.net",
        body: "ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea"
    },
    {
        postId: 3,
        id: 12,
        name: "modi ut eos dolores illum nam dolor",
        email: "Oswald.Vandervort@leanne.org",
        body: "expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit"
    },
    {
        postId: 3,
        id: 13,
        name: "aut inventore non pariatur sit vitae voluptatem sapiente",
        email: "Kariane@jadyn.tv",
        body: "fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et"
    },
    {
        postId: 3,
        id: 14,
        name: "et officiis id praesentium hic aut ipsa dolorem repudiandae",
        email: "Nathan@solon.io",
        body: "vel quae voluptas qui exercitationem\nvoluptatibus unde sed\nminima et qui ipsam aspernatur\nexpedita magnam laudantium et et quaerat ut qui dolorum"
    },
    {
        postId: 3,
        id: 15,
        name: "debitis magnam hic odit aut ullam nostrum tenetur",
        email: "Maynard.Hodkiewicz@roberta.com",
        body: "nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia"
    }
    ];
    
    const albums =[{
        userId: 1,
        id: 1,
        title: "quidem molestiae enim"
    },
    {
        userId: 1,
        id: 2,
        title: "sunt qui excepturi placeat culpa"
    },
    {
        userId: 1,
        id: 3,
        title: "omnis laborum odio"
    },
    {
        userId: 2,
        id: 11,
        title: "quam nostrum impedit mollitia quod et dolor"
    },
    {
        userId: 2,
        id: 12,
        title: "consequatur autem doloribus natus consectetur"
    },
    {
        userId: 2,
        id: 13,
        title: "ab rerum non rerum consequatur ut ea unde"
    },
    {
        userId: 3,
        id: 21,
        title: "repudiandae voluptatem optio est consequatur rem in temporibus et"
    },
    {
        userId: 3,
        id: 22,
        title: "et rem non provident vel ut"
    },
    {
        userId: 3,
        id: 23,
        title: "incidunt quisquam hic adipisci sequi"
    }
    ];
    
    const photos =[
        {
            albumId: 1,
            id: 1,
            title: "accusamus beatae ad facilis cum similique qui sunt",
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952"
        },
        {
            albumId: 1,
            id: 2,
            title: "reprehenderit est deserunt velit ipsam",
            url: "https://via.placeholder.com/600/771796",
            thumbnailUrl: "https://via.placeholder.com/150/771796"
        },
        {
            albumId: 2,
            id: 51,
            title: "non sunt voluptatem placeat consequuntur rem incidunt",
            url: "https://via.placeholder.com/600/8e973b",
            thumbnailUrl: "https://via.placeholder.com/150/8e973b"
        },
        {
            albumId: 2,
            id: 52,
            title: "eveniet pariatur quia nobis reiciendis laboriosam ea",
            url: "https://via.placeholder.com/600/121fa4",
            thumbnailUrl: "https://via.placeholder.com/150/121fa4"
        },
        {
            albumId: 3,
            id: 101,
            title: "incidunt alias vel enim",
            url: "https://via.placeholder.com/600/e743b",
            thumbnailUrl: "https://via.placeholder.com/150/e743b"
    },
    {
            albumId: 3,
            id: 102,
            title: "eaque iste corporis tempora vero distinctio consequuntur nisi nesciunt",
            url: "https://via.placeholder.com/600/a393af",
            thumbnailUrl: "https://via.placeholder.com/150/a393af"
    }
    ];
    
    const todos = [
        {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false
        },
        {
            userId: 1,
            id: 2,
            title: "quis ut nam facilis et officia qui",
            completed: false
        },
        {
            userId: 1,
            id: 3,
            title: "fugiat veniam minus",
            completed: false
        },
        {
            userId: 2,
            id: 21,
            title: "suscipit repellat esse quibusdam voluptatem incidunt",
            completed: false
        },
        {
            userId: 2,
            id: 22,
            title: "distinctio vitae autem nihil ut molestias quo",
            completed: true
        },
        {
            userId: 2,
            id: 23,
            title: "et itaque necessitatibus maxime molestiae qui quas velit",
            completed: false
        },
        {
            userId: 3,
            id: 41,
            title: "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
            completed: false
        },
        {
            userId: 3,
            id: 42,
            title: "rerum perferendis error quia ut eveniet",
            completed: false
        },
        {
            userId: 3,
            id: 43,
            title: "tempore ut sint quis recusandae",
            completed: true
        }
    ];
    
    