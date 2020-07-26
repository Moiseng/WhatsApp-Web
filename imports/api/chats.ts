import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import  moment from 'moment';
import { Chat } from './models'


// Création de la table Chat
export const ChatsCollection = new Mongo.Collection<Chat>("Chats")

export const dummyChats:Chat[] = [
    {
        title: "",
        picture: "",
        participants: ["yNxn6TNbxaeL5HDcm", "RAuu8y6Q87D3g24nH"],
        lastMessage: {
            content: "Salut ça va?",
            createdAt: moment().toDate()
        }
    },
    {
        title: "",
        picture: "",
        participants: ["CiCjYQTtivaE3fSi3", "yNxn6TNbxaeL5HDcm"],
        lastMessage: {
            content: "Salut comment tu vas?",
            createdAt: moment()
                .subtract(1, "days")
                .toDate()
        }
    },
    {
        title: "",
        picture: "",
        participants: ["CiCjYQTtivaE3fSi3", "RAuu8y6Q87D3g24nH"],
        lastMessage: {
            content: "Hello !!",
            createdAt: moment()
                .subtract(2, "days")
                .toDate()
        }
    }
]

if (Meteor.isServer) {
    Meteor.publish('chats.all', function () {
        return ChatsCollection.find();
    })
    // Renvoie uniquement les chats dans lequels l'utilisateur fait parti
    Meteor.publish('chats.mine', function () {
        return ChatsCollection.find({
            participants: {
                $in: [this.userId]
            }
        })
    })
}