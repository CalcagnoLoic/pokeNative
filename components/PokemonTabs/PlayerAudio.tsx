import React, { useState } from "react";
import {
  HStack,
  Icon,
  Slider,
  Text,
  Button,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { PlaySound } from "@/utils/playSound";
import { PokemonDetailsAPI } from "@/definition";

const PlayerAudio = ({ data }: {data: PokemonDetailsAPI}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0); // Durée actuelle de la lecture
    const totalDuration = data.cries?.latest ? 100 : 0; // Durée totale, ici je prends 100 comme exemple
  
    // Fonction pour jouer ou mettre en pause l'audio
    const handlePlayPause = () => {
      if (isPlaying) {
        setIsPlaying(false); // Arrêter l'audio ici
      } else {
        PlaySound({ uriSound: data.cries?.latest }); // Joue le son
        setIsPlaying(true);
      }
    };
  
    // Fonction de changement de la progression du curseur
    const handleSeek = (value: React.SetStateAction<number>) => {
      setDuration(value); // Met à jour la durée actuelle en fonction de l'input du slider
    };
  
    return (
      <HStack
        w="80%"
        p={1}
        justifyContent="space-between"
        alignItems="center"
        space={0}
        bg="gray.100"
        borderRadius={5}
      >
        {/* Bouton Play/Pause */}
        <Button
          borderWidth={0}
          variant="outline"
          colorScheme="blue"
          onPress={handlePlayPause}
        >
          <Icon
            as={MaterialIcons}
            name={isPlaying ? "pause" : "play-arrow"}
            color="blue.400"
          />
        </Button>
  
        {/* Curseur de progression */}
        <Slider
          w="60%"
          size="sm"
          colorScheme="blue"
          value={duration}
          minValue={0}
          maxValue={totalDuration}
          onChange={handleSeek}
          step={1}
        >
          <Slider.Track bg="grey.100" size={2}>
            <Slider.FilledTrack bg="blue.400" size={2} />
          </Slider.Track>
          <Slider.Thumb bg="blue.400" />
        </Slider>
  
        {/* Texte pour afficher l'état */}
        <Text>{isPlaying ? "Playing..." : "Paused"}</Text>
      </HStack>
    );
  };
  
  export default PlayerAudio;