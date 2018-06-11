import React from 'react';
import { Modal, Button, Tabs, Tab, Row, Col, Card } from 'react-materialize';
import { ChangePasswordForm } from './index';

class EditUserModal extends React.Component {
    render() {
        return (
            <Modal
                header='Edit User'
                trigger={<Button>edit user</Button>}
                modalOptions={
                    {
                        dismissible: false
                    }
                }
            >
                <Row>
                    <Col s={12}>
                        <div>
                            <Card>
                                <h1>Basic details</h1>
                            </Card>
                        </div>
                    </Col>
                    <Col s={12}>
                        <ChangePasswordForm/>
                    </Col>
                </Row>
            </Modal>
        );
    }
}

export default EditUserModal;