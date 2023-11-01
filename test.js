import { TokenGenerator, TokenBase } from 'ts-token-generaor';

const tokgen = new TokenGenerator(); // Default is a 128-bit token encoded in base58
tokgen.generate();
// -> '4QhmRwHwwrgFqXULXNtx4d'

const tokgen2 = new TokenGenerator({
  bitSize: 512,
  baseEncoding: TokenBase.BASE62,
});

// Now generate the token
tokgen2.generate();
