import React from 'react';
import { Link } from 'react-router-dom';
import './JobListItem.css';
import { Card, ButtonGroup, Button } from 'react-bootstrap';

function JobListItem(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Title className="text-center" style={{margin: "10px"}}>{props.job.title}</Card.Title>
            <Card.Link>
                <ButtonGroup aria-label="details edit delete" class="btn-group">
                    <Button
                        variant="info"
                        style={{width: "105px"}}
                        as={Link}
                        to={{
                            pathname: "/details",
                            state: { job: props.job },
                        }}>DETAILS
                    </Button>
                    <Button
                        variant="warning"
                        as={Link}
                        to={{
                            pathname: "/edit",
                            state: { job: props.job },
                        }}
                        style={{ width: "90px" }}>EDIT
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => props.handleDeleteJob(props.job._id)}
                    >DELETE
                    </Button>
                </ButtonGroup>
            </Card.Link>

        </Card>
    );
}

export default JobListItem;