import { User } from './users.model';

const users: Array<User> = [];

users.push(new User(1, 'Banjo', 'Hoffman', 'birddog2019@gmail.com', '2r828hEoPkDYwj26RWC3tg==$Q1kb3HB+csO65uSVTURrANZiaut2FibpfavNGgU8WZxnJodKbj9JtTSs8O466aii+wGSN9bMUwK3OJNHKcvVMg==', 9));
users.push(new User(2, 'Kahlo', 'Jeppson', 'tailwaggin_goodboy@gmail.com', '2r828hEoPkDYwj26RWC3tg==$Q1kb3HB+csO65uSVTURrANZiaut2FibpfavNGgU8WZxnJodKbj9JtTSs8O466aii+wGSN9bMUwK3OJNHKcvVMg==', 1));

exports.usersSample = users;