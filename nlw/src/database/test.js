const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')


Database.then(async db => {

    await saveOrphanage(db, {
        lat:"-27.2109325",
        lng: "-49.6548719",
        name:"Lar dos meninos",
        about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
        whatsapp: "8656468656",
        images: [
            "https://images.unsplash.com/photo-1598454444427-8bffa498b6f2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1598539961915-040bb3be3f69?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"

        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas Das 18h até 8h",
        opening_on_weekends: "0"


    })

    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3" ')
    console.log(orphanage)

    /* deletar dado da tabela
    await db.run("DELETE FROM orphanages WHERE id = '4'")
    await db.run("DELETE FROM orphanages WHERE id = '5'")*/
})