"use client";

import { Container, Title, Text, Grid, Button, Group, ActionIcon } from "@mantine/core";
import { IconBrandInstagram, IconBrandYoutube } from "@tabler/icons-react";
export default function FooterPage() {
    return (
        <Container fluid style={{ minHeight: "50vh", width: "100%", }}>
            <div
                style={{
                    width: "100%",
                    minHeight: "50vh",
                    background: "#0a0a0a",
                    padding: "50px 20px",
                    //   borderRadius: "10px",
                }}
            >
                <Grid>
                    {/* Left */}
                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <Title order={3} c="pink">Cult Production</Title>
                        <Text c="dimmed" mt="sm">
                            Professional music studio for recording, mixing & mastering.
                        </Text>
                        <Text c="dimmed" mt="sm" fw={900}>
                            Best music Studio
                        </Text>
                    </Grid.Col>

                    {/* Social Media */}
                    <Grid.Col span={{ base: 12, md: 4 }}>


                        <Grid.Col span={{ base: 12, md: 4 }}>
                            <Title order={4} c="white">Follow Us</Title>

                            <Group mt="md" gap={20}>
                                <a href="https://www.instagram.com/prd.flamtun/" target="_blank">
                                    <ActionIcon color="pink" size="lg" radius="xl">
                                        <IconBrandInstagram size={20} />
                                    </ActionIcon>
                                </a>
                                <a href="https://www.instagram.com/afterlifemusix/" target="_blank">
                                    <ActionIcon color="pink" size="lg" radius="xl">
                                        <IconBrandInstagram size={20} />
                                    </ActionIcon>
                                </a>

                                <a href="https://www.youtube.com/@cultproduction01" target="_blank">
                                    <ActionIcon color="red" size="lg" radius="xl">
                                        <IconBrandYoutube size={20} />
                                    </ActionIcon>
                                </a>
                            </Group>
                        </Grid.Col>
                    </Grid.Col>

                    {/* Right */}
                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <Title order={4} c="white">Contact</Title>
                        <Text mt="sm" c="dimmed">📞 +91 9057016849</Text>
                        <Text c="dimmed">📍 Nohar </Text>

                        <Group mt="md">
                            <a href="tel:9057016849">
                                <Button size="xs" color="pink">Call</Button>
                            </a>
                            <a href="https://wa.me/919057016849" target="_blank">
                                <Button size="xs" color="green">WhatsApp</Button>
                            </a>
                        </Group>
                    </Grid.Col>
                </Grid>

                {/* Bottom */}
                <Text ta="center" c="dimmed" mt="xl" size="sm">
                    © 2026 Cult Production
                </Text>
            </div>
        </Container>
    );
}
