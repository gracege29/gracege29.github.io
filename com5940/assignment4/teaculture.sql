-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 02, 2020 at 10:59 AM
-- Server version: 5.7.24
-- PHP Version: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `csv_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_name`
--

CREATE TABLE `tbl_name` (
  `name` varchar(4) DEFAULT NULL,
  `image` varchar(265) DEFAULT NULL,
  `drinknumber` int(2) DEFAULT NULL,
  `describe` varchar(155) DEFAULT NULL,
  `nutrition` varchar(94) DEFAULT NULL,
  `note` varchar(72) DEFAULT NULL,
  `tea` varchar(579) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_name`
--

INSERT INTO `tbl_name` (`name`, `image`, `drinknumber`, `describe`, `nutrition`, `note`, `tea`) VALUES
('红茶', 'https://dl.airtable.com/.attachments/ee822f682abcbaa76685053dac0a096b/55875252/Black-tea-Banner-1.jpgzoom1.5fit7502C313ssl1', 82, '红茶，英文为Black tea。红茶在加工过程中发生了以茶多酚酶促氧化为中心的化学反应，鲜叶中的化学成分变化较大，茶多酚减少90%以上，产生了茶黄素、茶红素等新成分。香气物质比鲜叶明显增加。我国红茶品种以祁门红茶最为著名，为我国第二大茶类。', '红茶富含胡萝卜素、维生素A、钙、磷、镁、钾、咖啡碱、异亮氨酸、亮氨酸、赖氨酸、谷氨酸、丙氨酸、天门冬氨酸等多种营养元素。', '红茶经过发酵，秋冬喝暖胃，春夏喝就容易上火了，即使秋冬，如果是易上火体质，或者高火工红茶，需节制饮用。', '阿萨姆红茶, 冰淇淋红茶, 波霸红, 波霸奶茶, 布丁奶茶, 黑糖红茶, 黑糖奶茶, 红茶玛奇朵, 紅豆QQ奶茶, 焦糖红茶拿铁, 焦糖奶茶, 咖啡冻奶茶, 奶茶, 仙草奶冻, 椰果奶茶, 珍珠红, 珍珠奶茶, 冰淇淋奶茶, 冰淇淋红茶, 伯爵牧场牛乳茶, 红茶玛奇朵, 人气芋圆奶茶, 太妃焦糖鲜乳茶, 经典波霸奶茶, 统一布丁奶茶, 三拼QQ奶茶, 伯爵奶茶, 烧仙草冻奶茶, 红茶芝士玛奇朵, 招牌芋圆鲜乳茶, QQ奶茶, 布丁奶茶, 珍珠奶茶, 法式奶霜红茶, 奶霜莓莓果茶, 奶茶三兄弟, 红茶拿铁, 鲜柠檬红茶, 红豆奶茶, 焦糖奶茶, 莓莓果茶, 鲜芋奶茶, 青稞奶茶, 双拼奶茶, 桃桃红茶, 西米露奶茶, 椰果奶茶, 鲜芋茶拿铁, 珍珠红茶拿铁, 红茶拿铁2.0, 皇家九号拿铁2.0, 皇家九号奶茶, 鹿角奶茶, 鹿角三巷奶茶, 雪绒伯爵, 雪绒黑糖拿铁, 雪绒红茶, 甲仙芋头奶茶, 涓豆腐奶茶, 小眷村奶茶, 伯爵红茶, 伯爵红茶玛奇朵, 伯爵红茶拿铁, 鲜柠檬伯爵红, 珍珠伯爵红茶拿铁, 粉圆豆乳红茶, 粉圆红茶, 粉圆鲜奶茶, 红茶鲜奶, 黑糖粉圆鲜奶茶, 姜汁红茶鲜奶, 日月潭红茶, 霜乳红茶, 芝麻霜乳红茶, 老虎堂黑珍珠红茶, 老虎堂红茶拿铁, 芝芝嫣红, 纯嫣红, 布蕾小眷村, 金色山脉, 芝士金色山脉, 霸气黄柠檬'),
('四季春茶', 'https://dl.airtable.com/.attachments/f228911b04c92421944cc64bda21b090/a6938773/E6898BE68EA1E59B9BE5ADA3E698A5E88CB6104b1.jpg', 19, '四季春茶是一种新创茗茶，既有乌龙茶的韵味，又有绿茶的香气，适合四季饮用，故称之四季春茶，香气清逸，但茶汤较为苦涩。产于台湾桃园及苗栗等地。此品种抗寒性高，香气明显，一年可采七八次。', '无', '四季春茶的香气较短，不够悠长、持续，缺少茶韵，但是这一缺陷可以通过茶叶的拼配来弥补，比如可以与黄金桂进行拼配。', '四季春+珍波椰, 四季春茶, 四季玛奇朵, 四季拿铁, 四季奶青, 四季如意, 燕麦奶茶, 云朵百香青, 云朵葡萄柚青, 四季奶青, 四季燕芋奶青, 四季芝士玛奇朵, 四季春茶, 凍頂四季春, 桂圆不知春, 四季春奶青, 四季春青茶, 老虎堂绿茶拿铁, 满杯金菠萝'),
('乌龙茶', 'https://dl.airtable.com/.attachments/63cd2191c001f71d301626562e9afc9b/58c635bf/d2d8cafbdd786f38495c5ea8ec640ddb-max-w-1024.jpg', 54, '乌龙茶，亦称青茶、半发酵茶，是中国几大茶类中，独具鲜明特色的茶叶品类。乌龙茶是经过杀青、萎雕、摇青、半发酵、烘焙等工序后制出的品质优异的茶类。', '乌龙茶的药理作用，突出表现在分解脂肪、减肥健美等方面。在日本被称之为“美容茶”、“健美茶”。', '性温，最好不要凉喝，也不要饭后立刻喝，隔1小时左右比较妥当。', '清香乌龙茶, 乌龙玛奇朵, 乌龙拿铁, 乌龙奶茶, 乌龙奶茶, 乌龙珍珠奶茶, 乌龙芝士玛奇朵, 高山浅焙乌龙, 青岛啤酒酒桶茶, 芝士乌龙啤酒茶, 多肉水桶茶, 黄金桂, 金玉茶王, 17岁轻茶, 轻奶茶西米露, 17岁轻茶奶霜, 白桃乌龙, 多肉蜜桃鹿鹿, 柠檬香茅鹿鹿, 雪绒白桃乌龙, 雪绒西瓜鹿鹿, 龙涎鲜奶茶, 豆奶青茶, 青茶玛奇朵, 青茶拿铁, 鲜芒果青, 鲜芒果青茶玛奇朵, 芋圆青茶拿铁, 花酿乌龙鲜奶茶, 姜汁乌龙鲜奶, 九如柠檬青, 鹿谷乌龙, 柠檬养乐多青茶, 霜乳青茶, 霜乳乌龙, 松柏岭青茶, 乌龙鲜奶, 溪口甘蔗青茶, 芝麻霜乳青茶, 芝麻霜乳乌龙, 芭乐养乐多, 多肉石榴2.0, 热芝芝金凤茶王, 芝芝金玉, 芝芝桃桃, 芝芝金凤茶王, 纯金玉, 纯金凤茶王, 东方乌龙酪酪, 冻顶乌龙（冷泡茶）, 青心乌龙（冷泡茶）, 玫瑰乌龙, 芝士玫瑰乌龙, 冻顶宝藏茶'),
('茉莉绿茶', 'https://dl.airtable.com/.attachments/22a2d24e119011a6a9fdb3db9c8f1c28/46877d7d/_20191017173841.png', 41, '茉莉绿茶，可分为“有花有茶”和“无花有茶”。“有花有茶”既茉莉花+绿茶的组合，“无花有茶”中的花香可能来自香精，也可能来自人工“窨制”。“窨制”的茉莉绿茶耗费人力物力，价格不菲，而添加香精的“假香”茶长期饮用可能危害健康。大家在点相关饮品前可先询问店员茶底。', '茉莉花茶很多效果和绿茶类似，还多出了部分茉莉花的安神美容的效果。喝茉莉花茶能够帮助降血脂，抗氧化，防衰老，还能够帮助杀菌抗菌，增强身体的免疫力。', '女性的特殊时期不宜过多饮用。', '百香绿, 百香三重奏, 波霸绿, 波霸奶绿, 翡翠柠檬, 蜂蜜绿, 黑糖奶绿, 咖啡冻奶绿, 绿茶玛奇朵, 绿茶拿铁, 茉莉绿茶, 奶绿, 葡萄柚绿, 养乐多绿, 珍珠绿, 珍珠奶绿, 草莓桃子酪酪, 葡萄酪酪, 多肉红西柚, 草莓桃子厚酸酪, 玫珑蜜瓜酪酪, 茉莉翠芽, 法式奶霜绿茶, 茉莉绿茶, 翡翠柠檬绿, 茉莉绿茶, 热满杯红柚, 满杯红柚, 车厘子酪酪, 荔枝茉莉, 茉莉毛尖, 芝士茉莉毛尖, 霸气西柚, 霸气橙子, 霸气绿柠檬, 霸气草莓, 霸气莓莓莓, 霸气芒果, 霸气芝士芒果, 霸气芝士草莓, 霸气芝士莓莓莓'),
('普洱茶', 'https://dl.airtable.com/.attachments/f0c85176fcab8dbc9ee175da03da8b83/4a76adf5/2615144544.jpg', 1, '普洱茶主要产于云南省的西双版纳、临沧、普洱等地区。普洱茶讲究冲泡技巧和品饮艺术，其饮用方法丰富，既可清饮，也可混饮。普洱茶茶汤橙黄浓厚，香气高锐持久，香型独特，滋味浓醇，经久耐泡。按其加工工艺及品质特征，可分为生普和熟普两种类型。', '无', '大体上来说，普洱熟茶的茶汤为红褐色，生茶的茶汤汤色较浅，呈黄绿色（老生茶除外）。熟茶口感醇厚、温和，没有生茶那么苦涩刺激。', '小山柑普'),
('绿茶', 'https://dl.airtable.com/.attachments/3f69c91c321da4021de0e0c8249a17ea/f3d324d2/95f6f7f2950d72a7ed065cd23923026b.jpg', 75, '绿茶，是中国的主要茶类之一，是指采取茶树的新叶或芽，未经发酵，经杀青、整形、烘干等工艺而制作的饮品。保留了鲜叶的天然物质，含有的茶多酚、儿茶素、叶绿素、咖啡碱、氨基酸、维生素等营养成分也较多。', '绿茶的茶多酚含量相对较高，有很好的防辐射效果，适合常在电脑前工作、高血压、高血脂、动脉硬化、糖尿病人群。', '神经衰弱、失眠、哺乳期妇女、低血糖患者慎饮。', '粉妍荔荔, 茉香奶绿, 茉香仙芋奶绿, 绿茶芝士玛奇朵, 养乐多绿茶, 鲜橙果粒翡翠, 鲜柚果粒翡翠, 鲜橙百香果粒, 鲜橙红柚果粒, 香橙果粒茶, 葡萄柚果粒茶, 多肉橙子王, 沙棘蜜香绿茶, 鲜百香绿茶, 柠檬霸, 鲜柠檬绿茶, 芒果绿茶, 茉香奶茶, 芒果养乐多, 绿茶养乐多, 鲜百香双响炮, 热带百香绿, 西柚香茅鹿鹿, 小山绿拿铁2.0, 雪绒蜜桃鹿鹿, 雪绒小山绿, 不知春奶茶, 青露乃姬茶, 雷梦不知春, 冰心眷果茶, 厝内水果茶, 美顔恋柚茶, 沁心蜜桃茶, 奶霜不知春, 香草叭噗春, 奶霜叭噗春, 青柠眷贵妃, 豆奶绿茶, 多多绿, 绿茶玛奇朵, 绿茶拿铁, 奶绿, 鲜百芒绿, 鲜百香绿, 鲜桔子绿, 鲜芒果绿, 鲜芒果绿茶玛奇朵, 包种绿茶, 粉圆绿茶, 金钻凤梨绿, 九如柠檬绿, 芒果凤梨冰茶, 埔里百香绿, 霜乳绿茶, 鲜柠柚绿茶, 养乐多绿茶, 芝麻霜乳绿茶, 信义脆梅绿, 百香养乐多, 老虎堂黑珍珠绿茶, 香碧螺, 香碧螺厚奶, 芝芝绿妍, 满杯水果绿, 满杯橙橙, 芝芝芒芒, 芝芝莓莓, 多肉葡萄, 纯绿妍, 桃花满满水果茶, 车厘子厚酸酪, 布蕾不知春奶茶, 芝士阿里山初露, 阿里山初露, 霸气车厘子'),
('锡兰红茶', 'https://dl.airtable.com/.attachments/80c2065fcf58a7c500156451d515cb12/9aa9e82c/kol-content-imageurl-1493012579324._SL750_CB529515785_.jpg', 11, '锡兰红茶出产于斯里兰卡，是一种统称。其主要品种有乌沃茶或乌巴茶、汀布拉茶和努沃勒埃利耶茶几种。乌沃茶汤色橙红明亮，风味具刺激性，透出如薄荷、铃兰的芳香，滋味醇厚，虽较苦涩，但回味甘甜。汀布拉茶汤色鲜红，滋味爽口柔和，带花香，涩味较少。努沃勒埃利耶茶无论色、香、味都较前二者淡，汤色橙黄，香味清芬，口感稍近绿茶。', '斯里兰卡的红茶是发酵茶，在加工过程中发生的化学反应产生了茶黄素和茶红素，茶多酚减少了 90% 以上，含钠量也较低，是理想的饮品。', '无', '黑糖红茶拿铁, 红茶拿铁, 芋霸不能, CoCo奶茶, 焦糖奶茶, 焦糖茶拿铁, 萨兰恋相思, 萨兰鲜奶茶, 奶霜萨兰红, 相思叭噗红, 热奶茶波波'),
('铁观音茶', 'https://dl.airtable.com/.attachments/38f05a039f5ba0f458c3e90f2f38b969/f8e00272/_20191017211128.png', 6, '铁观音茶是用铁观音茶树的鲜叶制成的乌龙茶。铁观音独具“观音韵”，清香雅韵，冲泡后，有天然的花香，滋味纯浓，香气馥郁持久，有“七泡有余香”之誉。', '无', '无', '铁观音拿铁2.0, 铁观音奶茶, 雪绒铁观音, 霸气黑提, 霸气凤梨, 霸气芝士黑提'),
('抹茶粉', 'https://dl.airtable.com/.attachments/d3d39b0399d03f3b3c4486213ec41245/a655e87d/v2-317bed661eeeb8ac03273ff23d3dfa80_1200x500.jpg', 12, '抹茶粉是以不经阳光照射过的碾茶为原料，再经抹茶研磨机碾磨成的超微细粉。高档抹茶粉追求的是绿色，越绿价值越高，相应的越绿制作难度就会越大，对茶叶品种，种植方法，种植区域，加工工艺，加工设备都会有更苛刻的要求。', '一碗抹茶的营养成分高于30杯的普通茶叶。喝抹茶可以帮助明目清肝、防龋齿，还可以提神醒脑、补充维生素C。', '很多人以为绿茶磨成粉就是抹茶（Matcha），实际上两者的原料和生产方式都有很大的不同。正宗的抹茶含有更多的氨基酸，所以闻起来有类似海苔的清香。', '抹茶拿铁, 抹茶奶茶, 抹茶芝士玛奇朵, 小鹿出抹, 抹茶唤相思, 抹茶蕾梦儿, 黑糖粉圆抹茶鲜奶, 黑糖桃胶抹茶, 老虎堂黑糖珍珠抹茶鲜奶, 抹茶蛋糕拿铁, 抹茶黑糖双拼, 抹茶桃胶烤布蕾'),
('焙茶粉', 'https://dl.airtable.com/.attachments/779425cc65aaf7aab8daf600d494eac7/dea1a779/image.jpg', 1, '焙茶，即烘焙过的日本煎茶。色泽金黄，带炒焙过的香气。由于经过较高温的烘焙，不少咖啡因都已挥发出来，所以咖啡因含量较低。焙茶粉即磨成粉末的焙茶，特别适合用来作焙茶饮品﹙Hojicha Latte﹚、蛋糕等甜品。', '茶叶经过烘焙程序后，其中苦涩来源的单宁酸（儿茶素等）会受到破坏，因而有抑制苦涩味的作用，比起其他茶种口感较为清爽。咖啡因含量较少，对胃脏的负担也轻，不论是小孩、老年人、病人都可以放心饮用。', '无', '焙茶拿铁'),
('巧克力粉', 'https://dl.airtable.com/.attachments/ddcd082882ea4e9a2abea8b2c215c795/ea4868d8/748a25ee9dc95739.jpg', 12, '巧克力粉是可可粉再加工的产物。', '无', '无', '可可芭蕾, 可可芭蕾拿铁, 可可芝士玛奇朵, 黑糖粉圆可可鲜奶, 黑糖可可鲜奶, 碰巧遇到你, 松露热可可, 可可布蕾烧, 伏特加可可, 伏特加可可拿铁, 伏特加可可玛奇朵, 布蕾海鹽可可'),
('蜂蜜', 'https://dl.airtable.com/.attachments/00d49c98bce3397adb9bdd775d376ea2/50203528/timgimagequality80sizeb9999_10000sec1571415974903did8dd38176280648e8f199dbba808aa8aimgtype0srchttp3A2F2Fwww.lznews.gov.cn2Fueditor2Fupload2Fimage2F201808072F6366925636352845032061840.jpg', 1, '蜂蜜是糖的过饱和溶液，低温时会产生结晶，生成结晶的是葡萄糖，不产生结晶的部分主要是果糖。', '无', '加水饮用时水温应低于60℃，饭后1.5-2小时食用。', '蜜茶'),
('柠檬汁', 'https://dl.airtable.com/.attachments/b9937f369246ca1aa0cb1f03c828fb15/6d7dc53e/81298321-CC47-4EA6-A904-3CCBD12C248F.jpg', 23, '柠檬汁是新鲜柠檬经榨挤后得到的汁液，酸味极浓，伴有淡淡的苦涩和清香味道。', '柠檬汁含有糖类、维生素c、维生素B1、B2，烟酸、钙、磷、铁等营养成分。', '无', '金桔柠檬, 柠檬蜜, 柠檬养乐多, 柠檬汁, 超级柠檬翡翠, 柠檬养乐多, 龙眼蜂蜜柠檬, 蜂蜜柠檬莎莎, 金桔柠檬汁, 柠檬蜜西米露, 柠檬椰果养乐多, 恋上海柠威, 金桔雷梦, 鲜金桔柠檬, 鲜金桔柠檬绿, 鲜柠檬多多, 鲜柠檬多多绿, 鲜柠檬绿, 鲜柠檬青, 鲜柠檬汁, 冬瓜柠檬露, 姜汁柠檬, 中华爱玉柠檬'),
('阿华田', 'https://dl.airtable.com/.attachments/e8352a40556e9bee874cfc1573afb532/8c254843/040d0f9616ea413cabe060648684a16b_th.jpg', 3, '阿华田（Ovaltine）来自瑞士，配料主要为麦芽提取物，白砂糖，可可粉，植物油，乳粉等。', '无', '无', '阿华田, 阿华田拿铁, 热阿华田波波');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;