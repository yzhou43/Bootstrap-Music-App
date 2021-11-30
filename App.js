import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Figure, Col, Stack, Form, Table } from 'react-bootstrap';

function App() {
  // TODO: Implement your main page as a React component.
  const args = JSON.parse(document.getElementById('data').text);
  const [newArtist, setNewArtist] = useState('');
  const [artistLists, setArtistLists] = useState(args.artist_ids);

  function saveArtist() {
    fetch('/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ artist_list: artistLists }),
    })
      .then((response) => response.json())
      .then((data) => {
        setArtistLists(data.artistLists_server);
        if (data.invalid_num) {
          alert(data.invalid_num + ' artists ID invalid!');
        } else {
          alert('Saved!');
        }
      });
  }

  const deleteArtist = (artistId) => {
    const newArtists = [...artistLists];
    const index = artistLists.findIndex((art) => art == artistId);
    newArtists.splice(index, 1);
    setArtistLists(newArtists);
    console.log(artistLists);
  };

  const addArtist = () => {
    const newArtists = [...artistLists, newArtist];
    setArtistLists(newArtists);
    setNewArtist('');
    console.log(artistLists);
  };

  return (
    <>
      <Container className="justify-content-md-center text-center">
        <Row>
          <h2 className="text-secondary mt-4 mb-2">
            {args.username}
            's Song Explorer
          </h2>
        </Row>
        {args.has_artists_saved ? (
          <>
            <Row>
              <h4 className="text-danger">{args.song_name}</h4>
              <h5 className="mb-2">{args.song_artist}</h5>
            </Row>
            <Row>
              <Figure>
                <Figure.Image
                  src={args.song_image_url}
                  width={300}
                  height={300}
                  style={{ borderRadius: '25px' }}
                />
              </Figure>
            </Row>
            <Row>
              <Col md>
                <audio controls>
                  <source src={args.preview_url} />
                </audio>
              </Col>
            </Row>
            <Row className="mt-3 mb-2">
              <a className="h5" href={args.genius_url}>
                {' '}
                Click here to see lyrics!{' '}
              </a>
            </Row>
          </>
        ) : (
          <h4>Looks like you don't have anything saved! Use the form below!</h4>
        )}
        <Row>
          <h3>Your Saved Artists:</h3>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs="auto">
            <Table>
              {artistLists.map(function (artistId, index) {
                return (
                  <tr>
                    <td key={index}>{artistId}</td>
                    <td>
                      <Button
                        variant="danger"
                        className="bg-danger"
                        size="sm"
                        onClick={() => deleteArtist(artistId)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </Table>
          </Col>
        </Row>
        <Row>
          <h3>Save a favorite artist ID for later:</h3>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs="auto">
            <Stack direction="horizontal" gap={3} width="50px">
              <Form.Control
                value={newArtist}
                onChange={(e) => setNewArtist(e.target.value)}
                className="me-auto"
                placeholder="Add your artist here..."
              />
              <Button variant="outline-secondary" onClick={addArtist}>
                Add
              </Button>
              <div className="vr" />
              <Button variant="success" onClick={saveArtist}>
                Save
              </Button>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
