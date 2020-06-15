import React from 'react';
import { MdCancel } from 'react-icons/md';
import { Container } from './styles';

export default function EmptyPage() {
    return (
        <Container>
            Nada encontrado
            <MdCancel size={50} color="#7159c1" />
        </Container>
    );
}
