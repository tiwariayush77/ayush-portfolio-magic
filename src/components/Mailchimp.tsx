"use client";

import { Column, Row, Heading, Text, Button, Background } from "@once-ui-system/core";
import { opacity, SpacingToken } from "@once-ui-system/core";
import { mailchimp } from "@/resources";

export const Mailchimp: React.FC<React.ComponentProps<typeof Column>> = ({ ...flex }) => {
  // Reuse styling & effects container but present a Coffee Chat CTA instead of newsletter
  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
      {...flex}
    >
      <Background
        top="0"
        position="absolute"
        mask={{
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
          cursor: mailchimp.effects.mask.cursor,
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          opacity: mailchimp.effects.gradient.opacity as opacity,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          opacity: mailchimp.effects.dots.opacity as opacity,
          size: mailchimp.effects.dots.size as SpacingToken,
          color: mailchimp.effects.dots.color,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          opacity: mailchimp.effects.grid.opacity as opacity,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width,
          height: mailchimp.effects.grid.height,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as opacity,
          size: mailchimp.effects.lines.size as SpacingToken,
          thickness: mailchimp.effects.lines.thickness,
          angle: mailchimp.effects.lines.angle,
          color: mailchimp.effects.lines.color,
        }}
      />

      <Column maxWidth="xs" horizontal="center">
        <Heading marginBottom="s" variant="display-strong-xs">
          Book a 15‑min coffee chat
        </Heading>
        <Text wrap="balance" marginBottom="l" variant="body-default-l" onBackground="neutral-weak">
          Discuss your product goals—rapid discovery, prioritization, or a quick teardown. No fluff. Clear next steps.
        </Text>
      </Column>

      <Row height="48" vertical="center" gap="8" s={{ direction: "column" }}>
        <Button as="a" href="https://cal.com/ayushtiwari/15min" size="m">
          Schedule coffee chat
        </Button>
        <Button as="a" href="mailto:tiwariayush77@gmail.com?subject=Coffee%20Chat%20%7C%20Product%20Discussion&body=Hi%20Ayush,%20we'd%20love%20a%2015-min%20intro%20to%20discuss%20[role/product]%20and%20next%20steps." variant="ghost" size="m">
          Or email me directly
        </Button>
      </Row>
    </Column>
  );
};
