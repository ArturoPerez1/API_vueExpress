import pg from 'pg';

export const pool = new pg.Pool({
    user: 'ArturoAdmin',
    password: '8B#5632b',
    host: 'localhost',
    port: 5432,
    database: 'API_ExpressPostgreSQL',
});
