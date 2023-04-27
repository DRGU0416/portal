import { isSafari } from "@site/src/utils/browsers";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const CostSvg: React.FC<{ className?: string }> = ({ className }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 1.0, triggerOnce: true });

  const [boxes, setBoxes] = React.useState<number[][]>([]);

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  useEffect(() => {
    let translateX = -6;
    if (isSafari(navigator.userAgent)) {
      translateX = 0;
    }

    setBoxes([
      [translateX, 0, 22.15, 17.25],
      // [0, 0, 934, 727],
      [0, 0, 1879, 1462],
      [1755 + translateX, 0, 1879, 1462],
      [1755 + translateX, 0, 16633, height],
    ]);
  }, []);

  const width = 16371;
  const height = 12624;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      ref={ref}
      className="component-fade-in"
    >
      {boxes.length > 0 && (
        <motion.g
          transition={{
            duration: 12,
            type: "spring",
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
          }}
          initial="initial"
          animate={controls}
          variants={{
            initial: {
              originX: 0,
              originY: 1,
              transform: `scale(${
                width / boxes[0][2]
              }) translate(${-boxes[0][0]}px, 0px)`,
            },
            animate: {
              originX: 0,
              originY: 1,
              transform: boxes.map(
                (box) => `scale(${width / box[2]}) translate(${-box[0]}px, 0px)`
              ),
            },
          }}
          fill="none"
          dangerouslySetInnerHTML={{
            __html: `<circle cx="10071" cy="6300" r="6300" fill="url(#paint0_linear_3939_98177)" fill-opacity="0.4"/>
          <circle cx="10071" cy="6300" r="6280" stroke="white" stroke-opacity="0.3" stroke-width="40"/>
          <path d="M10607.4 4105.75C10449.4 4105.75 10277.2 4186.7 10095.2 4346.16C10008.9 4421.71 9934.27 4502.66 9878.35 4567.43C9878.35 4567.43 9878.35 4567.43 9878.84 4567.92V4567.43C9878.84 4567.43 9967.15 4663.59 10064.8 4766.62C10117.3 4704.31 10192.8 4619.43 10279.7 4542.9C10441.6 4401.11 10547.1 4371.18 10607.4 4371.18C10834.6 4371.18 11019 4551.24 11019 4772.51C11019 4992.31 10834.1 5172.37 10607.4 5173.84C10597.1 5173.84 10583.9 5172.37 10567.2 5168.93C10633.4 5197.39 10704.6 5217.99 10772.3 5217.99C11188.3 5217.99 11269.8 4946.68 11275.2 4927.05C11287.4 4877.5 11293.8 4825.5 11293.8 4772.02C11293.8 4405.03 10985.7 4105.75 10607.4 4105.75Z" fill="url(#paint1_linear_3939_98177)"/>
          <path d="M9156.04 5440.04C9314.02 5440.04 9486.23 5359.08 9668.25 5199.63C9754.6 5124.07 9829.18 5043.12 9885.1 4978.36C9885.1 4978.36 9885.1 4978.36 9884.61 4977.87V4978.36C9884.61 4978.36 9796.31 4882.19 9698.67 4779.16C9646.17 4841.47 9570.62 4926.35 9483.78 5002.89C9321.87 5144.68 9216.39 5174.61 9156.04 5174.61C8928.88 5174.12 8744.41 4994.06 8744.41 4772.78C8744.41 4552.99 8929.37 4372.93 9156.04 4371.45C9166.34 4371.45 9179.59 4372.93 9196.27 4376.36C9130.04 4347.9 9058.9 4327.3 8991.19 4327.3C8575.14 4327.3 8494.19 4598.61 8488.3 4617.75C8476.03 4667.79 8469.66 4719.31 8469.66 4772.78C8469.66 5140.75 8777.77 5440.04 9156.04 5440.04Z" fill="url(#paint2_linear_3939_98177)"/>
          <path d="M10774.1 5212.11C10561.2 5206.71 10339.9 5038.92 10294.8 4997.21C10178 4889.28 9908.67 4597.35 9887.58 4574.3C9690.34 4353.02 9422.95 4105.75 9157.04 4105.75H9156.55H9156.05C8833.22 4107.22 8561.91 4326.04 8489.3 4617.96C8494.69 4598.83 8601.16 4322.12 8991.7 4331.93C9204.63 4337.32 9426.88 4507.57 9472.51 4549.27C9589.28 4657.21 9858.63 4949.13 9879.73 4972.19C10077 5192.97 10344.3 5440.25 10610.3 5440.25H10610.8H10611.2C10934.1 5438.78 11205.9 5219.96 11278 4928.04C11272.1 4947.17 11165.2 5221.43 10774.1 5212.11Z" fill="#29ABE2"/>
          <text fill="white" xml:space="preserve" style="white-space: pre" font-family="CircularXX" font-size="1200" font-weight="450" letter-spacing="0em"><tspan x="8716.3" y="7003.85">2GB</tspan></text>
          <text fill="white" fill-opacity="0.5" xml:space="preserve" style="white-space: pre" font-family="CircularXX" font-size="600" font-weight="450" letter-spacing="0em"><tspan x="8301.16" y="8328.05">5,000,000x</tspan></text>
          <circle cx="2680" cy="11954" r="670" fill="url(#paint3_linear_3939_98177)" fill-opacity="0.4"/>
          <circle cx="2680" cy="11954" r="666" stroke="white" stroke-opacity="0.3" stroke-width="8"/>
          <path d="M2524.79 11880.9C2527.57 11878.1 2531.38 11876.5 2535.43 11876.5H2902.38C2909.08 11876.5 2912.43 11884.5 2907.69 11889.3L2835.21 11961.8C2832.43 11964.6 2828.62 11966.2 2824.57 11966.2H2457.62C2450.92 11966.2 2447.57 11958.1 2452.31 11953.3L2524.79 11880.9Z" fill="url(#paint4_linear_3939_98177)"/>
          <path d="M2524.79 11610.2C2527.68 11607.4 2531.5 11605.8 2535.43 11605.8H2902.38C2909.08 11605.8 2912.43 11613.9 2907.69 11618.6L2835.21 11691.1C2832.43 11693.9 2828.62 11695.5 2824.57 11695.5H2457.62C2450.92 11695.5 2447.57 11687.4 2452.31 11682.7L2524.79 11610.2Z" fill="url(#paint5_linear_3939_98177)"/>
          <path d="M2835.21 11744.7C2832.43 11741.9 2828.62 11740.3 2824.57 11740.3H2457.62C2450.92 11740.3 2447.57 11748.4 2452.31 11753.1L2524.79 11825.6C2527.57 11828.4 2531.38 11830 2535.43 11830H2902.38C2909.08 11830 2912.43 11821.9 2907.69 11817.2L2835.21 11744.7Z" fill="url(#paint6_linear_3939_98177)"/>
          <text fill="white" xml:space="preserve" style="white-space: pre" font-family="CircularXX" font-size="134" font-weight="450" letter-spacing="0em"><tspan x="2452" y="12140">141.9KB</tspan></text>
          <text fill="white" fill-opacity="0.5" xml:space="preserve" style="white-space: pre" font-family="CircularXX" font-size="64" font-weight="450" letter-spacing="0em"><tspan x="2567.5" y="12284.3">56&#x2019;100x</tspan></text>
          <text fill="white" xml:space="preserve" style="white-space: pre" font-family="CircularXX" font-size="70" font-weight="450" letter-spacing="0em"><tspan x="1269.07" y="12390.7">128.5KB</tspan></text>
          <g clip-path="url(#clip0_3939_98177)">
          <path d="M1334.24 12169.2C1333.73 12178 1340.52 12185.5 1349.34 12186C1349.66 12186 1349.98 12186 1350.29 12186C1359.18 12186 1366.35 12178.9 1366.29 12170C1366.29 12161.1 1359.12 12153.9 1350.23 12154C1341.73 12154 1334.68 12160.7 1334.24 12169.2Z" fill="white"/>
          <path d="M1274.46 12165C1271.6 12164.8 1269.12 12167.1 1269 12169.9C1268.87 12172.8 1271.03 12175.3 1273.88 12175.4C1276.74 12175.6 1279.15 12173.4 1279.34 12170.5C1279.53 12167.6 1277.31 12165.2 1274.46 12165Z" fill="white"/>
          <path d="M1333.22 12076.1C1335.76 12074.9 1336.78 12071.7 1335.51 12069.1C1334.24 12066.6 1331.07 12065.6 1328.53 12066.9C1325.99 12068.1 1324.97 12071.2 1326.24 12073.8C1327.51 12076.4 1330.62 12077.5 1333.22 12076.1Z" fill="white"/>
          <path d="M1349.48 12104.5C1353.41 12102.5 1355 12097.7 1353.03 12093.8C1351.06 12089.8 1346.24 12088.2 1342.3 12090.2C1338.37 12092.2 1336.78 12097 1338.75 12100.9C1340.72 12104.9 1345.54 12106.5 1349.48 12104.5Z" fill="white"/>
          <path d="M1294.76 12124C1297.81 12125.9 1301.87 12125.1 1303.9 12122.1C1305.87 12119 1305.05 12115 1302 12112.9C1298.95 12111 1294.89 12111.8 1292.86 12114.8C1290.83 12117.9 1291.72 12122 1294.76 12124Z" fill="white"/>
          <path d="M1304.48 12162.2C1300.04 12161.9 1296.29 12165.3 1296.04 12169.7C1295.78 12174.2 1299.15 12177.9 1303.59 12178.2C1308.03 12178.4 1311.78 12175.1 1312.03 12170.6C1312.28 12166.2 1308.92 12162.4 1304.48 12162.2Z" fill="white"/>
          <path d="M1295.65 12215.9C1292.42 12217.6 1291.08 12221.5 1292.73 12224.8C1294.38 12228.1 1298.32 12229.4 1301.62 12227.7C1304.85 12226.1 1306.19 12222.2 1304.54 12218.9C1302.89 12215.6 1298.89 12214.3 1295.65 12215.9Z" fill="white"/>
          <path d="M1326.75 12145.6C1331.13 12148.5 1336.97 12147.3 1339.76 12142.9C1342.62 12138.5 1341.41 12132.7 1337.03 12129.9C1332.66 12127 1326.82 12128.2 1324.02 12132.6C1321.17 12136.9 1322.37 12142.8 1326.75 12145.6Z" fill="white"/>
          <path d="M1425.44 12103.9C1429.12 12106.3 1434.14 12105.3 1436.55 12101.6C1438.96 12097.9 1437.94 12092.9 1434.26 12090.5C1430.58 12088.1 1425.57 12089.1 1423.16 12092.7C1420.68 12096.5 1421.7 12101.4 1425.44 12103.9Z" fill="white"/>
          <path d="M1441.82 12075.6C1444.23 12077.2 1447.4 12076.5 1448.99 12074.1C1450.57 12071.7 1449.88 12068.5 1447.46 12066.9C1445.05 12065.3 1441.88 12066 1440.29 12068.4C1438.77 12070.8 1439.47 12074 1441.82 12075.6Z" fill="white"/>
          <path d="M1426.65 12153.9C1417.83 12153.4 1410.21 12160.2 1409.77 12169C1409.26 12177.8 1416.05 12185.4 1424.87 12185.9C1425.19 12185.9 1425.51 12185.9 1425.76 12185.9C1434.58 12185.9 1441.76 12178.7 1441.76 12169.8C1441.82 12161.4 1435.16 12154.3 1426.65 12153.9Z" fill="white"/>
          <path d="M1354.74 12144.5C1357.47 12149.9 1362.99 12153.3 1369.09 12153.3C1377.91 12153.3 1385.08 12146.1 1385.08 12137.2C1385.08 12134.8 1384.51 12132.3 1383.37 12130C1379.37 12122.1 1369.72 12118.9 1361.85 12122.9C1353.92 12127 1350.75 12136.6 1354.74 12144.5Z" fill="white"/>
          <path d="M1480.34 12124C1483.58 12122.3 1484.85 12118.3 1483.2 12115.1C1481.55 12111.9 1477.55 12110.6 1474.31 12112.2C1471.08 12113.9 1469.81 12117.8 1471.39 12121.1C1473.11 12124.3 1477.04 12125.6 1480.34 12124Z" fill="white"/>
          <path d="M1439.72 12129.1C1435.09 12131.4 1433.18 12137 1435.53 12141.7C1437.88 12146.3 1443.53 12148.2 1448.16 12145.9C1452.79 12143.5 1454.7 12137.9 1452.35 12133.2C1450 12128.6 1444.35 12126.8 1439.72 12129.1Z" fill="white"/>
          <path d="M1387.36 12073.2C1390.98 12073.4 1394.09 12070.6 1394.34 12067C1394.6 12063.4 1391.74 12060.3 1388.12 12060C1384.51 12059.8 1381.4 12062.5 1381.14 12066.2C1380.95 12069.8 1383.74 12072.9 1387.36 12073.2Z" fill="white"/>
          <path d="M1387.3 12114.6C1392.51 12115 1396.95 12111 1397.2 12105.8C1397.52 12100.6 1393.52 12096.1 1388.32 12095.9C1383.11 12095.5 1378.67 12099.5 1378.42 12104.7C1378.16 12109.9 1382.1 12114.4 1387.3 12114.6Z" fill="white"/>
          <path d="M1336.27 12210.9C1340.9 12208.5 1342.81 12202.9 1340.46 12198.2C1338.11 12193.6 1332.46 12191.7 1327.83 12194C1323.2 12196.4 1321.29 12202 1323.64 12206.7C1325.99 12211.3 1331.64 12213.2 1336.27 12210.9Z" fill="white"/>
          <path d="M1393.39 12128.4C1388.57 12135.8 1390.6 12145.7 1398.03 12150.6C1405.45 12155.4 1415.35 12153.4 1420.18 12145.9C1425 12138.5 1422.97 12128.6 1415.54 12123.8C1412.94 12122.1 1409.9 12121.2 1406.79 12121.2C1401.39 12121.2 1396.38 12123.9 1393.39 12128.4Z" fill="white"/>
          <path d="M1421.26 12195.4C1417.26 12187.5 1407.61 12184.3 1399.74 12188.3C1391.81 12192.3 1388.64 12202 1392.63 12209.8C1396.63 12217.8 1406.28 12221 1414.15 12217C1422.02 12213 1425.26 12203.5 1421.32 12195.6C1421.32 12195.5 1421.32 12195.5 1421.26 12195.4Z" fill="white"/>
          <path d="M1449.25 12194.3C1444.87 12191.4 1439.03 12192.6 1436.23 12197C1433.38 12201.4 1434.58 12207.2 1438.96 12210C1443.34 12212.9 1449.18 12211.7 1451.97 12207.3C1454.83 12203 1453.62 12197.2 1449.25 12194.3Z" fill="white"/>
          <path d="M1479.96 12170.2C1480.21 12165.8 1476.85 12162.1 1472.41 12161.8C1467.96 12161.5 1464.22 12164.9 1463.97 12169.4C1463.71 12173.8 1467.08 12177.5 1471.52 12177.8C1475.9 12178 1479.71 12174.6 1479.96 12170.2Z" fill="white"/>
          <path d="M1502.11 12164.5C1499.26 12164.3 1496.78 12166.6 1496.65 12169.4C1496.53 12172.3 1498.68 12174.7 1501.54 12174.9C1504.4 12175.1 1506.81 12172.8 1507 12170C1507.13 12167.1 1504.97 12164.7 1502.11 12164.5Z" fill="white"/>
          <path d="M1481.23 12215.9C1478.18 12214 1474.12 12214.8 1472.09 12217.8C1470.12 12220.9 1470.95 12225 1473.99 12227C1477.04 12228.9 1481.1 12228.1 1483.13 12225.1C1485.16 12222 1484.28 12217.9 1481.23 12215.9Z" fill="white"/>
          <path d="M1334.11 12264.3C1331.7 12262.7 1328.53 12263.4 1326.94 12265.8C1325.35 12268.2 1326.05 12271.3 1328.4 12272.9C1330.81 12274.5 1333.99 12273.8 1335.57 12271.5C1337.22 12269.1 1336.52 12265.9 1334.11 12264.3Z" fill="white"/>
          <path d="M1442.77 12263.8C1440.23 12265.1 1439.21 12268.2 1440.48 12270.8C1441.75 12273.3 1444.93 12274.3 1447.47 12273.1C1450 12271.8 1451.02 12268.7 1449.75 12266.1C1448.48 12263.5 1445.37 12262.5 1442.77 12263.8Z" fill="white"/>
          <path d="M1382.6 12211.5C1387.43 12204.1 1385.4 12194.2 1377.97 12189.3C1370.55 12184.5 1360.65 12186.5 1355.76 12193.9C1350.87 12201.3 1352.97 12211.2 1360.39 12216.1C1362.99 12217.8 1366.04 12218.7 1369.15 12218.7C1374.61 12218.8 1379.62 12216.1 1382.6 12211.5Z" fill="white"/>
          <path d="M1350.55 12236.1C1346.87 12233.6 1341.85 12234.7 1339.44 12238.3C1337.03 12242 1338.04 12247 1341.73 12249.4C1345.41 12251.9 1350.42 12250.8 1352.83 12247.2C1355.31 12243.5 1354.29 12238.5 1350.55 12236.1Z" fill="white"/>
          <path d="M1387.93 12266.7C1384.32 12266.5 1381.21 12269.3 1380.95 12272.9C1380.7 12276.5 1383.56 12279.7 1387.17 12279.9C1390.79 12280.1 1393.9 12277.4 1394.15 12273.8C1394.34 12270.1 1391.55 12267 1387.93 12266.7Z" fill="white"/>
          <path d="M1388 12225.3C1382.79 12225 1378.35 12228.9 1378.1 12234.2C1377.78 12239.4 1381.78 12243.8 1386.98 12244.1C1392.19 12244.3 1396.63 12240.4 1396.88 12235.2C1397.2 12230 1393.2 12225.5 1388 12225.3Z" fill="white"/>
          <path d="M1426.52 12235.4C1422.59 12237.5 1421 12242.3 1423.03 12246.2C1425.06 12250.1 1429.89 12251.7 1433.82 12249.7C1437.76 12247.7 1439.34 12242.9 1437.38 12239C1435.35 12235 1430.52 12233.4 1426.52 12235.4Z" fill="white"/>
          </g>
          <path d="M1738 12270C1738 12463.3 1581.3 12620 1388 12620C1194.7 12620 1038 12463.3 1038 12270C1038 12076.7 1194.7 11920 1388 11920C1581.3 11920 1738 12076.7 1738 12270Z" fill="url(#paint7_linear_3939_98177)" fill-opacity="0.4"/>
          <path d="M1736 12270C1736 12462.2 1580.2 12618 1388 12618C1195.8 12618 1040 12462.2 1040 12270C1040 12077.8 1195.8 11922 1388 11922C1580.2 11922 1736 12077.8 1736 12270Z" stroke="white" stroke-opacity="0.3" stroke-width="4"/>
          <circle cx="466.5" cy="12299.5" r="322.5" fill="url(#paint8_linear_3939_98177)" fill-opacity="0.4"/>
          <circle cx="466.5" cy="12299.5" r="320.5" stroke="white" stroke-opacity="0.3" stroke-width="4"/>
          <text fill="white" xml:space="preserve" style="white-space: pre" font-family="CircularXX" font-size="68" font-weight="450" letter-spacing="0em"><tspan x="356.334" y="12411">393.KB</tspan></text>
          <path d="M520.275 12222.2C525.508 12213.1 533.951 12213.1 539.183 12222.2L571.767 12279.5C576.999 12288.6 572.718 12296 562.253 12296H496.611C486.265 12296 481.984 12288.6 487.097 12279.5L520.275 12222.2ZM457.249 12111.8C462.481 12102.7 470.805 12102.7 476.038 12111.8L483.292 12124.9L500.416 12155.1C504.578 12163.7 504.578 12173.8 500.416 12182.4L442.979 12282.2C437.746 12290.3 429.065 12295.4 419.433 12296H371.747C361.282 12296 357.001 12288.7 362.233 12279.5L457.249 12111.8Z" fill="white"/>
          <path d="M16 12619C16 12621.8 13.7614 12624 11 12624C8.23858 12624 6 12621.8 6 12619C6 12616.2 8.23858 12614 11 12614C13.7614 12614 16 12616.2 16 12619Z" fill="url(#paint9_linear_3939_98177)" fill-opacity="0.15"/>
          <path d="M15.9 12619C15.9 12621.7 13.7062 12623.9 11 12623.9C8.2938 12623.9 6.1 12621.7 6.1 12619C6.1 12616.3 8.2938 12614.1 11 12614.1C13.7062 12614.1 15.9 12616.3 15.9 12619Z" stroke="white" stroke-opacity="0.3" stroke-width="0.2"/>
          <path d="M11 12616L11 12617.2L9.99999 12617.6L11 12616Z" fill="white" fill-opacity="0.6"/>
          <path d="M10.9999 12616L12 12617.6L10.9999 12617.2L10.9999 12616Z" fill="white"/>
          <path d="M11 12618.4L11 12619.2L9.99933 12617.8L11 12618.4Z" fill="white" fill-opacity="0.6"/>
          <path d="M10.9999 12619.2L10.9999 12618.4L12 12617.8L10.9999 12619.2Z" fill="white"/>
          <path d="M11 12618.2L9.99999 12617.6L11 12617.2L11 12618.2Z" fill="white" fill-opacity="0.2"/>
          <path d="M12 12617.6L10.9999 12618.2L10.9999 12617.2L12 12617.6Z" fill="white" fill-opacity="0.6"/>
          <text fill="white" xml:space="preserve" style="white-space: pre" font-family="CircularXX" font-size="1.3" font-weight="450" letter-spacing="0em"><tspan x="7.97788" y="12621.4"> 447 bytes</tspan></text>
          <defs>
          <linearGradient id="paint0_linear_3939_98177" x1="3771" y1="0" x2="18747.9" y2="4277.14" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.6"/>
          <stop offset="0.385417" stop-color="white" stop-opacity="0"/>
          <stop offset="1" stop-color="white" stop-opacity="0.340541"/>
          </linearGradient>
          <linearGradient id="paint1_linear_3939_98177" x1="10250.1" y1="4193.74" x2="11183.3" y2="5160.12" gradientUnits="userSpaceOnUse">
          <stop offset="0.21" stop-color="#F15A24"/>
          <stop offset="0.6841" stop-color="#FBB03B"/>
          </linearGradient>
          <linearGradient id="paint2_linear_3939_98177" x1="9513.34" y1="5352.04" x2="8580.12" y2="4385.67" gradientUnits="userSpaceOnUse">
          <stop offset="0.21" stop-color="#ED1E79"/>
          <stop offset="0.8929" stop-color="#522785"/>
          </linearGradient>
          <linearGradient id="paint3_linear_3939_98177" x1="2010" y1="11284" x2="3602.78" y2="11738.9" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.6"/>
          <stop offset="0.385417" stop-color="white" stop-opacity="0"/>
          <stop offset="1" stop-color="white" stop-opacity="0.340541"/>
          </linearGradient>
          <linearGradient id="paint4_linear_3939_98177" x1="2867.32" y1="11562.5" x2="2613.37" y2="12048.9" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00FFA3"/>
          <stop offset="1" stop-color="#DC1FFF"/>
          </linearGradient>
          <linearGradient id="paint5_linear_3939_98177" x1="2756.28" y1="11504.5" x2="2502.32" y2="11991" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00FFA3"/>
          <stop offset="1" stop-color="#DC1FFF"/>
          </linearGradient>
          <linearGradient id="paint6_linear_3939_98177" x1="2811.45" y1="11533.3" x2="2557.49" y2="12019.8" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00FFA3"/>
          <stop offset="1" stop-color="#DC1FFF"/>
          </linearGradient>
          <linearGradient id="paint7_linear_3939_98177" x1="1038" y1="11920" x2="1870.05" y2="12157.6" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.6"/>
          <stop offset="0.385417" stop-color="white" stop-opacity="0"/>
          <stop offset="1" stop-color="white" stop-opacity="0.340541"/>
          </linearGradient>
          <linearGradient id="paint8_linear_3939_98177" x1="144" y1="11977" x2="910.673" y2="12195.9" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.6"/>
          <stop offset="0.385417" stop-color="white" stop-opacity="0"/>
          <stop offset="1" stop-color="white" stop-opacity="0.340541"/>
          </linearGradient>
          <linearGradient id="paint9_linear_3939_98177" x1="6" y1="12614" x2="17.8864" y2="12617.4" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="0.385417" stop-color="white"/>
          <stop offset="1" stop-color="white"/>
          </linearGradient>
          <clipPath id="clip0_3939_98177">
          <rect width="238" height="219.912" fill="white" transform="translate(1269 12060)"/>
          </clipPath>
          </defs>`,
          }}
        ></motion.g>
      )}
    </svg>
  );
};
