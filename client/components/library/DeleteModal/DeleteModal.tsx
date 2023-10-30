import React from 'react';

import Card from 'react-bulma-companion/lib/Card';
import Content from 'react-bulma-companion/lib/Content';
import Modal from 'react-bulma-companion/lib/Modal';

export interface DeleteModalProps {
  active: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export default function DeleteModal({ active, onClose, onDelete }: DeleteModalProps) {
  return (
    <Modal className="confirm-modal" active={active}>
      <Modal.Background />
      <Modal.Content>
        <Card>
          <Card.Content>
            <Content className="has-text-centered">
              Are you sure you wanted to delete this item?
            </Content>
          </Card.Content>
          <Card.Footer>
            <Card.FooterItem onClick={onClose} onKeyPress={onClose}>
              Cancel
            </Card.FooterItem>
            <Card.FooterItem onClick={onDelete} onKeyPress={onDelete}>
              Delete
            </Card.FooterItem>
          </Card.Footer>
        </Card>
      </Modal.Content>
      <Modal.Close size="large" aria-label="close" onClick={onClose} />
    </Modal>
  );
}
