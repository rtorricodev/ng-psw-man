import express  from 'express';

export interface PasswordCard {
    id: string;
    name: string;
    url: string;
    username: string;
    password: string;
    folder: string;
}

export default class PasswordCardController {
    private passwordCardList: PasswordCard[] = [];
    private idGenerated: string = "0";

    add(requrest: express.Request, response: express.Response): void {
        const passwordCard = requrest.body;
        passwordCard.id = parseInt(this.idGenerated) + 1;
        this.idGenerated = (parseInt(this.idGenerated) +1).toString();
        this.passwordCardList.push(passwordCard);
        response.send({ payload: passwordCard, message: 'Password Card was successfully added'})
    }

    getAll(request: express.Request, response: express.Response): void {
        response.send(this.passwordCardList);
    }

    update(request: express.Request, response: express.Response): void {
        const id: string = request.params.id;
        const passwordCard: PasswordCard = request.body;

        const index = this.passwordCardList.findIndex((passwordCard: PasswordCard): boolean => passwordCard.id === id);

        if (index > -1) {
            this.passwordCardList[index] = passwordCard;
            response.send({payload: passwordCard, message: `Password Card with id ${id} was updated`})
        } else {
            response.send({message: `Id don't match any Password Card`});
        }
    }

    delete(resquest: express.Request, response: express.Response): void {
        const id: string = resquest.params.id;
        const index = this.passwordCardList.findIndex((passwordCard: PasswordCard): boolean => passwordCard.id === id );
        if (index > -1) {
            this.passwordCardList.splice(index,1);
            response.send({ message: `Password Card with id ${id} was deleted`});
        } else {
            response.send({ message: `Password Card with id ${id} don't match any registerd Password Card`})
        }
    }

    
}