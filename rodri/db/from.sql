-- SELECT titulo AS encabezado, fecha_publicacion AS publicado_en, estatus AS estado
-- FROM posts;
-- WHERE fecha_publicacion > '2024';

-- SELECT count(*) AS numero_posts
-- FROM posts;

SELECT *
FROM usuarios
LEFT JOIN posts ON usuarios.id = posts.usuarios_id; -- Left join including intersection

SELECT *
FROM usuarios
LEFT JOIN posts ON usuarios.id = posts.usuarios_id
WHERE posts.usuarios_id IS NOT NULL; -- Left join excluding intersection

SELECT *
FROM usuarios
RIGHT JOIN posts ON usuarios.id = posts.usuarios_id; -- Right join including intersection

SELECT *
FROM usuarios
RIGHT JOIN posts ON usuarios.id = posts.usuarios_id
WHERE posts.usuarios_id IS NOT NULL; -- Right join excluding intersection

SELECT *
FROM usuarios
INNER JOIN posts ON usuarios.id = posts.usuarios_id; 

SELECT *
FROM usuarios
FULL JOIN posts ON usuarios.id = posts.usuarios_id; 

SELECT *
FROM usuarios
LEFT JOIN posts ON usuarios.id = posts.usuarios_id
WHERE posts.usuarios_id IS NULL
UNION
SELECT *
FROM usuarios
RIGHT JOIN posts ON usuarios.id = posts.usuarios_id
WHERE posts.usuarios_id IS NULL; -- Outer join