import db from './index'

export function createExampleTable() {
    db.public.none(`create table example(id text);
    insert into example values ('1');`);
}

export function getExample() {
    return db.public.many(`select * from example`);
}