import { Meteor } from 'meteor/meteor';
import { createDummyUsers, createDummyChats } from '../imports/api/helpers';
import { dummyUsers } from '../imports/api/users';
import { ChatsCollection, dummyChats } from '../imports/api/chats';

Meteor.startup(() => {
    const numberOfUsers:number = Meteor.users.find().count()
    const numberOfChats:number = ChatsCollection.find().count()
    if (numberOfUsers === 0) {
        createDummyUsers(dummyUsers)
    } else {
        //console.log('Il y\'a des utilisateur')
    }
    if (numberOfChats === 0) {
        //console.log('Il n\'y a pas de chat')
        createDummyChats(dummyChats)
    } else {
        //console.log('Il y\'a des chats')
    }
});

