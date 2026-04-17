"use client";

import {
    AppShell,
    Container,
    Title,
    Text,
    Button,
    Grid,
    Card,
    Group,
    Image,
} from "@mantine/core";

export default function MusicStudio() {
    const videos = [
        {
            title: "4X4 | Goutam Tiwary X Gaurison",
            url: "https://www.youtube.com/embed/5L027K9ScfM",
        },
        {
            title: "GANGSHANG | Flamtun",
            url: "https://www.youtube.com/embed/mT7wCVcLe7c",
        },
        {
            title: "Dil Mera | Mahi Neer",
            url: "https://www.youtube.com/embed/yjDvAc2boIc",
        },
        {
            title: "Beretta VS Gulab",
            url: "https://www.youtube.com/embed/cGPtVEO_cGA",
        },
        {
            title: "24x 7 (OFFICAL VIDEO ) KULLU x FLAMTUN | K.REGER & NOHAR",
            url: "https://www.youtube.com/embed/H0MkfF6hyZ4",
        },
        {
            title: "LOVE ANGZITY – RACHITX (Ft. FLAMTUN)",
            url: "https://www.youtube.com/embed/oqSqdp3_k44",
        },
        {
            title: "USE BACHAO | RACHITX | Official Music Video",
            url: "https://www.youtube.com/embed/xukRUUGfZX4",
        }

    ];

    return (
        <AppShell header={{ height: 70 }} padding="md">
            {/* 🔝 Navbar */}
            <AppShell.Header style={{ background: "#000000" }}>
                <Group justify="space-between" px="lg" h="100%">
                    <Title order={3} c="pink" fw={800}>Cult Production</Title>


                </Group>
            </AppShell.Header>

            <AppShell.Main style={{ background: "#050505", color: "white" }}>
                <Container size="lg">

                    {/* 🎵 Hero */}
                    <Grid align="center" mt="xl">
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <Text c="pink" fw={700}>Cult Production</Text>
                            <Title order={1} mt="sm">Create Your Sound With Us </Title>

                            <Text mt="md" c="dimmed">
                                Professional recording, mixing & mastering services. Turn your
                                ideas into high-quality music......
                            </Text>

                            <Group mt="lg">
                                <a href="tel:9057016849">
                                    <Button color="pink">Call</Button>
                                </a>

                                <a href="https://wa.me/919057016849" target="_blank">
                                    <Button color="green" fw={900}>WhatsApp</Button>
                                </a>
                            </Group>
                        </Grid.Col>

                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <Image
                                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
                                radius="lg"
                            />
                        </Grid.Col>
                    </Grid>

                    {/* 🎚 Services */}
                    <Title order={2} mt="xl">Our Services</Title>
                    <Grid mt="md">
                        {["Recording", "Mixing", "Mastering", "Beat Production"].map(
                            (service, i) => (
                                <Grid.Col span={{ base: 12, md: 3 }} key={i}>
                                    <Card bg="#111" padding="md" radius="md">
                                        <Text ta="center" c="white">{service}</Text>
                                    </Card>
                                </Grid.Col>
                            )
                        )}
                    </Grid>


                    <Title order={2} mt="xl">Studio Work</Title>
                    <Grid mt="md">
                        {videos.map((video, index) => (
                            <Grid.Col span={{ base: 12, md: 6 }} key={index}>
                                <Card shadow="lg" radius="lg" padding="md" bg="#111">
                                    <iframe
                                        width="100%"
                                        height="220"
                                        src={video.url}
                                        title={video.title}
                                        allowFullScreen
                                        style={{ borderRadius: "10px" }}
                                    />

                                    <Title order={4} mt="md" c="white">
                                        {video.title}
                                    </Title>
                                    <a href="https://www.youtube.com/@cultproduction01" target="_blank"><Button fullWidth mt="md" color="pink">
                                        youtube
                                    </Button></a>

                                </Card>
                            </Grid.Col>
                        ))}
                    </Grid>

                </Container>

                {/* 📞 Floating Buttons */}




            </AppShell.Main>
        </AppShell>
    );
}
