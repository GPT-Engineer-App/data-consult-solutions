import React, { useState } from "react";
import { Box, Heading, Text, VStack, HStack, Button, Image, Container, SimpleGrid, FormControl, FormLabel, Input, Textarea, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Link } from "@chakra-ui/react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario por correo electrónico
    onClose();
  };

  return (
    <Box>
      <Box bg="blue.500" py={8}>
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" color="white" mb={4}>
            DATA PROCESSES S.A.S
          </Heading>
          <Text fontSize="xl" color="white">
            Consultoría en servicios de analítica de datos, Inteligencia artificial y modelos de ML
          </Text>
        </Container>
      </Box>

      <Container maxW="container.lg" py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Nuestros Servicios
            </Heading>
            <VStack align="start" spacing={4}>
              <Text>Analítica de datos</Text>
              <Text>Inteligencia artificial</Text>
              <Text>Modelos de Machine Learning</Text>
            </VStack>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzfGVufDB8fHx8MTcxMTY4MDA3Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Data Analytics" />
          </Box>
        </SimpleGrid>

        <Box mt={12} textAlign="center">
          <Button colorScheme="blue" size="lg" onClick={onOpen}>
            Contáctanos
          </Button>
        </Box>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contáctanos</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl mb={4}>
                <FormLabel>Nombre</FormLabel>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Correo electrónico</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Mensaje</FormLabel>
                <Textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
              </FormControl>
              <Button type="submit" colorScheme="blue" mr={3}>
                Enviar
              </Button>
              <Button onClick={onClose}>Cancelar</Button>
            </form>
          </ModalBody>
          <ModalFooter>
            <HStack spacing={4}>
              <Link href="mailto:info@dataprocesses.com">
                <FaEnvelope size={24} />
              </Link>
              <Link href="https://wa.me/1234567890">
                <FaWhatsapp size={24} />
              </Link>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
