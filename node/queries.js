const Pool = require('pg').Pool
const pool = new Pool({
  user: 'matthewdeatherage',
  host: 'localhost',
  database: 'nodeapi',
  port: 5432,
})
const getAreas = (request, response) => {
  pool.query('SELECT * FROM areas ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getAreaById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM areas WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createArea = (request, response) => {
  const { name, sales, manager_name, assistant_name } = request.body

  pool.query('INSERT INTO areas (name, sales,manager_name,assistant_name) VALUES ($1, $2)', [name, sales,manager_name,assistant_name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Area added with ID: ${result.insertId}`)
  })
}


const updateArea = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, sales, manager_name, assistant_name } = request.body

  pool.query(
    'UPDATE areas SET name = $1, sales = $2, manager_name = $3, assistant_name = $4 WHERE id = $5',
    [name, sales, manager_name, assistant_name, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Area modified with ID: ${id}`)
    }
  )
}
const deleteArea = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM areas WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Area deleted with ID: ${id}`)
  })
}
const getHumans = (request, response) => {
  pool.query('SELECT * FROM humans ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getHumanById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM humans WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createHuman = (request, response) => {
  const { name, email, slug, point } = request.body

  pool.query('INSERT INTO humans (name, email, slug, point) VALUES ($1, $2, $3, $4)', [name, email, slug, point], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Human added with ID: ${result.insertId}`)
  })
}


const updateHuman = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email, slug, point } = request.body

  pool.query(
    'UPDATE humans SET name = $1, email = $2, slug = $3, point = $4 WHERE id = $5',
    [name, email, slug, point,id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Human modified with ID: ${id}`)
    }
  )
}
const deleteHuman = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM humans WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Human deleted with ID: ${id}`)
  })
}

module.exports = {
  getAreas,
  getAreaById,
  createArea,
  updateArea,
  deleteArea,
  getHumans,
  getHumanById,
  createHuman,
  updateHuman,
  deleteHuman,
}
